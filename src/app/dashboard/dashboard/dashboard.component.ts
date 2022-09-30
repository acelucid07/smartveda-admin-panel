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
owData: any;

  constructor(private userService: UsersService, private ngxLoader: NgxUiLoaderService) {}

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    // this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
      this.ngxLoader.stop();
    }
  }
}
