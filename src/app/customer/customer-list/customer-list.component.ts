import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { UsersService } from 'src/app/_services/users.service';
import { UserGetRequestParams } from 'src/app/_models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';

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
    private ngxLoader:NgxUiLoaderService, 
    private profileService:ProfileService,
    private router: Router,
    private route: ActivatedRoute
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

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
}
