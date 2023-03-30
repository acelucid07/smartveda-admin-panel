import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import {  queryStructure } from 'src/app/_models/user-management'
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/_services/user-mgmt.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-query-content',
  templateUrl: './query-content.component.html',
  styleUrls: ['./query-content.component.scss'],
})
export class QueryContentComponent implements OnInit {
    sidebarSpacing:String;
    File:any;
    id:string;
    items: MenuItem[];
    index:number;
    queryList:queryStructure[] = []
    
    get cssStringVar():string {
      if(document.querySelector('.cdk-overlay-container'))
      {return  'noscroll'}
      else{
        return ''
      }
    }
    

  constructor(
    private userService: UserService,
    private toastr: ToastrMsgService,
    private ref: ChangeDetectorRef,
    private ngxLoader: NgxUiLoaderService) {
    this.getQueryList()
  }
  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
}

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  

  receiveIndex(queryindex: number) {
    this.index = queryindex;
    console.log(this.index)
  }

  getQueryList() {
    this.userService.getQueryList().subscribe((res) => {
      this.queryList = res
      console.log(this.queryList)
    })
  }

  markResolved(queryindex: number) {
    this.ngxLoader.start();
    this.userService.resolveQuery(this.queryList[queryindex].queryid).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Query resolved successfully", "Query resolved")
        this.ngxLoader.stop();
      }
    })
  }

  revertQueryStatus(queryindex: number) {
    this.ngxLoader.start();
    this.userService.revertQuery(this.queryList[queryindex].queryid).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Query reverted successfully", "Query reversed")
        this.ngxLoader.stop();
      }
    })
  }
}