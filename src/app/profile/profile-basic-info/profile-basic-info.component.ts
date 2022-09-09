import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { UserGetRequestParams  } from '../../_models/user'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-basic-info',
  templateUrl: './profile-basic-info.component.html',
  styleUrls: ['./profile-basic-info.component.scss']
})
export class ProfileBasicInfoComponent implements OnInit {

  profile:any;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    let id : string | any = localStorage.getItem("_id")
    this.profileService.getProfile(id)
    .subscribe((data: any) => this.profile = data);
  }
}
