import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { UserGetRequestParams  } from '../../_models/user'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-basic-info',
  templateUrl: './profile-basic-info.component.html',
  styleUrls: ['./profile-basic-info.component.scss']
})
export class ProfileBasicInfoComponent implements OnInit {

  profile:any;
  fgsType:any;
  id:any;
  sidebarSpacing: any;
  rowData:any;

  constructor(private profileService: ProfileService, private ngxLoader:NgxUiLoaderService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.onToggleSidebar('open');
    this.activatedRoute.queryParamMap.subscribe(params => {
    this.id = params.get('id');
    });
    this.profileService.getProfile(this.id)
    .subscribe((data: UserGetRequestParams) => this.profile = data);
    this.ngxLoader.stop();
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
}
