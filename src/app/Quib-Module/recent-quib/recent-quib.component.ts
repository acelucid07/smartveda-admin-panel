import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { QuibService } from 'src/app/_services/Quib.service';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Quib } from 'src/app/_models/order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-recent-quib',
  templateUrl: './recent-quib.component.html',
  styleUrls: ['./recent-quib.component.scss']
})
export class RecentQuibComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  fgsType: any;
  cols: TABLE_HEADING[];
  display: boolean = false;
  recentQuibForm: FormGroup
  recentQuib: Quib[] = [];


  constructor(private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private fb: FormBuilder,
    private toastr: ToastrMsgService) {
      this.recentQuibForm = this.fb.group({
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
    this.getRecentActiveQuibList()
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
  getRecentActiveQuibList() {
    this.QuibService.getRecentActiveQuibList().subscribe((data) => {
      this.recentQuib = data
      this.ngxLoader.stop();
    });
  }
  
  EditRecentQuib(id) {
    let alphaBeticQuib = this.recentQuib.filter(item => item.id === id)
    this.recentQuibForm.patchValue({
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
  AddRecentQuib() {
    this.recentQuibForm.reset()
    this.display = true
  }
}
