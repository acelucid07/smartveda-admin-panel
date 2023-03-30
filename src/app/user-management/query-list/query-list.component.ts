import { Component, OnInit, ViewChild } from '@angular/core';
import { TABLE_HEADING } from '../../_models/table_heading'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Table } from 'primeng/table';
import { queryStructure } from 'src/app/_models/user-management';
import { UserService } from 'src/app/_services/user-mgmt.service';
@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.scss']
})
export class QueryListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  queryList:queryStructure[] = []
  fgsType: any;
  userStatus:Boolean=false;
  constructor(private ngxLoader: NgxUiLoaderService,
    private UserService: UserService,
    private toastr: ToastrMsgService,
  ) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'queryid', show: true, headers: 'QueryId' },
      { field: 'user', show: true, headers: 'Allotted User' },
      { field: 'appliedDate', show: true, headers: 'Applied Date' },
      { field: 'resolvedDate', show: true, headers: 'Completed Date' },
      { field: 'status', show: true, headers: 'Status'}
    ]
    this.getQueryList()
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getQueryList() {
    this.UserService.getQueryList().subscribe((res) => {
      this.queryList = res
      console.log(this.queryList)
      this.ngxLoader.stop();
    })
  }
  
  markResolved(queryList: any) {
    this.ngxLoader.start();
    this.UserService.resolveQuery(queryList.queryid).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Query resolved successfully", "Query resolved")
        this.ngxLoader.stop();
      }
    })
  }

  revertQueryStatus(queryList: any) {
    this.ngxLoader.start();
    this.UserService.revertQuery(queryList.queryid).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Query reverted successfully", "Query reversed")
        this.ngxLoader.stop();
      }
    })
  }
  
  //Search functionality start here
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
