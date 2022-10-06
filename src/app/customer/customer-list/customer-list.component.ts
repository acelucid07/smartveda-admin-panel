import { Component, OnInit, } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { UsersService } from 'src/app/_services/users.service';
import { UserGetRequestParams } from 'src/app/_models/user';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  sidebarSpacing: any;
  fgsType: any;
  rowData!: any;
  users!: UserGetRequestParams[];
  userDetails!: any;
  constructor(
    private userService:UsersService, 
    private ngxLoader:NgxUiLoaderService
    ) {}

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.userService.getUsers().subscribe((res:any) => {
      this.rowData = res.data;
      this.ngxLoader.stop();
    })
  }
}
