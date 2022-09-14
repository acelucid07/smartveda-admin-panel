import { Component, OnInit } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { UserGetRequestParams } from 'src/app/_models/user';
import { UsersService } from 'src/app/_services/users.service';

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
  
  faMoneyBill = faMoneyBill;
  columnDefs: ColDef[] = [
    { field: 'email' },
    { field: 'role' },
    { field: 'status'},
    { field: 'createdAt'}
  ]; 

  rowData: any;

  constructor(private userService: UsersService) {
    this.userService.getUsers().subscribe((res: any)=>{
      this.rowData = res.data;
    }); // api call aysnc, if not working change to subscribe()
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

}
