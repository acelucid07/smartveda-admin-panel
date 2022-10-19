import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { CmsService } from '../../../_services/cms.service';
import { SPONSOR } from '../../../_models/cms'
@Component({
  selector: 'app-add-edit-sponsor',
  templateUrl: './add-edit-sponsor.component.html',
  styleUrls: ['./add-edit-sponsor.component.scss']
})
export class AddEditSponsorComponent implements OnInit {
  sponsorForm: FormGroup
  fgsType: any;
  sidebarSpacing: any;
  id: any
  title: string = " "
  editMode: boolean = false
  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService,
    private CmsService: CmsService
  ) {
    this.sponsorForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone_No: ['', [Validators.required]],
      funding: ['', [Validators.required]],
      cityName: ['', Validators.required],
      street: ['', Validators.required],
      landmark: ['', Validators.required],
      state: ['', Validators.required],
      zip_code: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id && this.id != undefined) {
        this.editMode = true;
        this.title = "Edit Sponsor";
        this.getSponsorDetailsById()
      } else {
        this.editMode = false
        this.title = "Add New Sponser"
      }
    });
  }
  getSponsorDetailsById() {
    this.CmsService.getSponsorDetailsById(this.id).subscribe((res: SPONSOR) => {
      this.sponsorForm.patchValue({
        id: res.id,
        name: res.name,
        email: res.email,
        phone_No: res.phone_No,
        funding: res.funding,
        cityName: res.Address.cityName,
        street: res.Address.street,
        landmark: res.Address.landmark,
        state: res.Address.state,
        zip_code: res.Address.zip_code,
        country: res.Address.country
      })
      this.ngxLoader.stop();
    })
  }
}
