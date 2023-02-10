import { Component, OnInit, ViewChild,AfterContentChecked,  ChangeDetectorRef} from '@angular/core';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import {  queryStructure } from 'src/app/_models/user-management'
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import {MenuItem} from 'primeng/api';

// import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
// import { Table } from 'primeng/table';
@Component({
  selector: 'app-query-content',
  templateUrl: './query-content.component.html',
  styleUrls: ['./query-content.component.scss'],
})
export class QueryContentComponent implements OnInit, AfterContentChecked {
    sidebarSpacing:String;
    File:any;
    id:string;
    items: MenuItem[];
    index:number;
    queryList:queryStructure[] = []
    // queryContentDetails:queryContentStructure[] = [];
    
    // get value() : boolean {
    //   return this.queryList[this.index].status=='resolved'
    // }
    
    
    // public get value() : MenuItem[] {
    //   return 
    // }
    
  constructor(
    private userService: UserService,
    private toastr: ToastrMsgService,
    private ref: ChangeDetectorRef,
    private ngxLoader: NgxUiLoaderService,
    private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.queryParamMap.subscribe((params) => {
    //   this.id = params.get('queryid')
    //   this.queryDetails(this.id)
    // })
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

  // queryDetails(queryid: string) {
  //   let queryId = parseInt(queryid)
  //   this.userService.queryDetails(queryId).subscribe((res: any) => {

  //     this.queryContentDetails = res
  //     console.log(this.queryContentDetails.content)
  //   })
  // }

  // getqueryDetailsList() {
  //   this.userService.queryDetailsList().subscribe((res: any) => {
  //     this.queryContentDetails = res
  //     console.log(this.queryContentDetails)
  //   })
  // }

  receiveIndex(queryindex: number) {
    this.index = queryindex;
    console.log(this.index)
  }

  getQueryList() {
    this.userService.getQueryList().subscribe((res) => {
      this.queryList = res
      // this.items = [
      //   {
      //     label: 'Mark as resolved',
      //     icon: 'pi pi-check-square',
      //     disabled: this.queryList[this.index].status == 'resolved',
      //     command: () => {
      //       this.markResolved(this.index);
      //     }
      //   },
      //   {
      //     label: 'Revert Query Status',
      //     icon: 'pi pi-backward',
      //     disabled: this.queryList[this.index].status == 'pending',
      //     command: () => {
      //       this.revertQueryStatus(this.index);
      //     }
      //   }
      // ];
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
  ngAfterContentChecked():void{
    this.ref.detectChanges();
    // this.items = [
    //   {
    //     label: 'Mark as resolved',
    //     icon: 'pi pi-check-square',
    //     disabled: this.queryList[this.index].status == 'resolved',
    //     command: () => {
    //       this.markResolved(this.index);
    //     }
    //   },
    //   {
    //     label: 'Revert Query Status',
    //     icon: 'pi pi-backward',
    //     disabled: this.queryList[this.index].status == 'pending',
    //     command: () => {
    //       this.revertQueryStatus(this.index);
    //     }
    //   }
    // ];
  }
  

    
}