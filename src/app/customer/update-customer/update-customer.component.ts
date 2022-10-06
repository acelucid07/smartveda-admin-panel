import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { UserGetRequestParams } from 'src/app/_models/user';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  sidebarSpacing: any;
  id:any;
  profile: any;
  updateCustomerForm: FormGroup;
  fgsType: any;
  login: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private profileService: ProfileService,
    public fb: FormBuilder,
    private ngxLoader: NgxUiLoaderService,
    private route: Router
    ) { 
      this.updateCustomerForm = this.fb.group({
        id: [''],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        status: ['',[Validators.required]],
        role: ['',[Validators.required]],
      })
    }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.profileService.getProfile(this.id)
    .subscribe((response: UserGetRequestParams) => 
    {
      this.updateCustomerForm.patchValue({
        id: this.id,
        email: response.email,
        phone: response.phone,
        role: response.role,
        status: response.status
      });
       console.log(response);
    });
    
    this.ngxLoader.stop();
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  onSubmit(id:any) {
  this.profileService.updateCustomerProfile(this.updateCustomerForm.value).subscribe((data: UserGetRequestParams) => {
      this.profile = data
      })
      this.route.navigate(['/customer']), { relativeTo: this.activateRoute}
  }
}
