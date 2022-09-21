import { Component, OnInit } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { UserGetRequestParams } from 'src/app/_models/user';
import { UsersService } from 'src/app/_services/users.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
// interface UserGetRequest {
//  data:UserGetRequestParams[],
//  message:string
// }
export class DashboardComponent implements OnInit {

  // user$: Observable<UserGetRequestParams>;
  sidebarSpacing: any;
  fgsType: any;
  
  faMoneyBill = faMoneyBill;
  columnDefs: ColDef[] = [
    { field: 'email'},
    { field: 'phone' },
    { field: 'role' },
    { field: 'status'},
    { field: 'createdAt'}
  ]; 

  defaultColDef: ColDef = {
    editable: true,
    sortable: true,
    filter: true,
    resizable: true,
  };

  rowData: any;

  constructor(private userService: UsersService, private ngxLoader: NgxUiLoaderService) {
    this.userService.getUsers().subscribe((res: any)=>{
      this.rowData = res.data;
      this.ngxLoader.stop();
    }); // api call aysnc, if not working change to subscribe()
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

}
