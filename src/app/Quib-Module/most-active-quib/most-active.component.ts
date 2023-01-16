import { Component, OnInit, ViewChild } from '@angular/core';
import { Quib } from 'src/app/_models/order';
import { QuibService } from 'src/app/_services/Quib.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-most-active-quib',
  templateUrl: './most-active.component.html',
  styleUrls: ['./most-active.component.scss'],
  providers: [ConfirmationService]
})
export class MostActiveComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  Quib_User: Quib[] = [];
  display: boolean = false;
  mostActiveQuibForm: FormGroup
  fgsType: any;

  constructor(
    private QuibService: QuibService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
  ) { 
    this.mostActiveQuibForm = this.fb.group({
      user: ["", [Validators.required]],
      movies: ['', [Validators.required]],
      quib: ['', [Validators.required]],
      time: ['', [Validators.required]],
      createdDate: ['', [Validators.required]],
      postedDate: ['', [Validators.required]],
      isEnabled: ['', [Validators.required]],
      isBumped: ['', [Validators.required]],
      quibType: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
     this.getMostActiveQuibList()
    this.cols = [
      { field: 'user', show: true, headers: 'User' },
      { field: 'movies', show: true, headers: 'Movies'},
      { field: 'quib', show: true, headers: 'Quib' },
      { field: 'time', show: true, headers: 'Time' },
      { field: 'createdDate', show: true, headers: 'Created Date' },
      { field: 'postedDate', show: true, headers: 'Posted Date' },
      { field: 'isEnabled', show: true, headers: 'Is Enabled' },
      { field: 'isBumped', show: true, headers: 'Is Bumped' },
      { field: 'quibType', show: true, headers: 'Quib Type' },
      
    ]
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
 
  getMostActiveQuibList() {
    this.QuibService.getMostActiveQuibList().subscribe((data) => {
      this.Quib_User =  data
      this.ngxLoader.stop();
    });
  }
  IsEnabled(id:number,Status:boolean){
    this.ngxLoader.start();
    this.QuibService.IsEnabled(id,Status).subscribe(res => {
      if (res) {
        this.toastr.showSuccess(" Status change successfully", "Status change")
        this.getMostActiveQuibList()
      }
    })
  }

  IsBumped(id:number,Status:boolean){
    this.ngxLoader.start();
    this.QuibService.IsBumped(id,Status).subscribe(res => {
      if (res) {
        this.toastr.showSuccess(" Status change successfully", "Status change")
        this.getMostActiveQuibList()
      }
    })
  }
  EditMostActiveQuib(id) {
    let alphaBeticQuib = this.Quib_User.filter(item => item.id === id)
    this.mostActiveQuibForm.patchValue({
      user: alphaBeticQuib[0].user,
      movies: alphaBeticQuib[0].movies,
      quib: alphaBeticQuib[0].quib,
      time: alphaBeticQuib[0].time,
      createdDate: alphaBeticQuib[0].createdDate,
      postedDate: alphaBeticQuib[0].postedDate,
      isEnabled: alphaBeticQuib[0].isEnabled,
      isBumped: alphaBeticQuib[0].isBumped,
      quibType: alphaBeticQuib[0].quibType,
    })
    this.display = true
  }
  AddMostActiveQuib() {
    this.mostActiveQuibForm.reset()
    this.display = true
  }
  deleteQuib(QuibId) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete Quib ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.QuibService.deleteQuib(QuibId).subscribe(res => {
          this.toastr.showSuccess(" Quib deleted successfully", "Quib delete")
          this.getMostActiveQuibList()
        })
      },
    });
    
  }
}
