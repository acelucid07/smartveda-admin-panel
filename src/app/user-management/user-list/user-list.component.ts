import { Component, OnInit, ViewChild } from '@angular/core';
import { TABLE_HEADING } from '../../_models/table_heading'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Table } from 'primeng/table';
import { userStructure } from 'src/app/_models/user-management';
import { UserService } from 'src/app/_services/user-mgmt.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  userList:userStructure[] = []
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
      { field: 'id', show: true, headers: 'Id' },
      { field: 'name', show: true, headers: 'UserName' },
      { field: 'email', show: true, headers: 'Email' },
      { field: 'phone', show: true, headers: 'Phone' },
      { field: 'role', show: true, headers: 'Role' },
      { field: 'status', show: true, headers: 'Status'}
    ]
    this.getUserList()
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getUserList() {
    this.UserService.getUserList().subscribe((res) => {
      this.userList = res
      console.log(this.userList)
      this.ngxLoader.stop();
    })
  }
  
  retrieveUserDetails(userList: any) {
  this.ngxLoader.start();
  this.UserService.retrieveUser(userList.id).subscribe(res => {
if(res){
  this.toastr.showSuccess("User retrieved successfully", "User retrieved")
  this.ngxLoader.stop();
}
  })

  }
  deleteUserDetails(userList: any) {
    console.log(userList)
    this.ngxLoader.start();
    this.UserService.deleteUser(userList.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("User deleted successfully", "User deleted")
        this.getUserList()
      }
    })
  }
  //Search functionality start here
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
