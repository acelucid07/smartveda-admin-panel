import { Component, OnInit, ViewChild } from '@angular/core';
import { Quib } from 'src/app/_models/order';
import { QuibService } from 'src/app/_services/Quib.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading';
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-alpha-betic-quib',
  templateUrl: './alpha-betic-quib.component.html',
  styleUrls: ['./alpha-betic-quib.component.scss'],
})
export class AlphaBeticQuibComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  cols!: TABLE_HEADING[];
  sidebarSpacing: any;
  alphaBeticQuib: Quib[] = [];
  display: boolean = false;
  alphaBeticQuibForm: FormGroup
  fgsType: any;
  constructor(
    private QuibService: QuibService,
    private fb: FormBuilder,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService
  ) {
    this.alphaBeticQuibForm = this.fb.group({
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
    this.getAlphBeticQuibList();
    this.cols = [
      { field: 'user', show: true, headers: 'User' },
      { field: 'movies', show: true, headers: 'Movies' },
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

  getAlphBeticQuibList() {
    this.QuibService.getAlphBeticQuibList().subscribe((data) => {
      this.alphaBeticQuib = data;
      this.ngxLoader.stop();
    });
  }
  EditAlphaBeticQuib(id) {
    let alphaBeticQuib = this.alphaBeticQuib.filter(item => item.id === id)
    this.alphaBeticQuibForm.patchValue({
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
  AddAlphaBeticQuib() {
    this.alphaBeticQuibForm.reset()
    this.display = true
  }
}
