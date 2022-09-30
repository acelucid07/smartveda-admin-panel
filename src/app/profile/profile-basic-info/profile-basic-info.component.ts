import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { UserGetRequestParams  } from '../../_models/user'
import { Observable } from 'rxjs';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor(private profileService: ProfileService, private ngxLoader:NgxUiLoaderService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.onToggleSidebar('open');
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.activatedRoute.queryParamMap.subscribe(params => {
    this.id = params.get('id');
    console.log(this.id);
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
