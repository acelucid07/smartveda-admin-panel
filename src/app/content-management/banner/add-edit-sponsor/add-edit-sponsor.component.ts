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
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      funding: ['', [Validators.required]],
      city: ['', Validators.required],
      street: ['', Validators.required],
      landmark: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
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
    this.CmsService.getSponsorDetailsById(parseInt(this.id)).subscribe((res:any) => {
      this.sponsorForm.patchValue({
        id: res.id,
        name: res.name,
        email: res.email,
        phone: res.phone,
        funding: res.funding,
        city: res.address.city,
        street: res.address.street,
        landmark: res.address.landmark,
        state: res.address.state,
        zip: res.address.zip,
        country: res.address.country
      })
      this.ngxLoader.stop();
    })
  }
  addSponsor(){
    let payload ={
      name: this.sponsorForm.controls["name"].value,
      email: this.sponsorForm.controls["email"].value,
      phone: this.sponsorForm.controls["phone"].value,
      funding: this.sponsorForm.controls["funding"].value,
      address: {
        city: this.sponsorForm.controls["city"].value,
        street: this.sponsorForm.controls["street"].value,
        landmark: this.sponsorForm.controls["landmark"].value,
        state: this.sponsorForm.controls["state"].value,
        zip: this.sponsorForm.controls["zip"].value,
        country: this.sponsorForm.controls["country"].value
      }
    }
    this.CmsService.addSponsor(payload).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("sponsor added successfully", "sponsor Added")
        this.ngxLoader.stop()
        this.route.navigate(['/crm/sponsor'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }
  editSponsor() {
    let payload = {
      id : this.id,
      name: this.sponsorForm.controls["name"].value,
      email: this.sponsorForm.controls["email"].value,
      phone: this.sponsorForm.controls["phone_No"].value,
      funding: this.sponsorForm.controls["funding"].value,
      address: {
        city: this.sponsorForm.controls["city"].value,
        street: this.sponsorForm.controls["street"].value,
        landmark: this.sponsorForm.controls["landmark"].value,
        state: this.sponsorForm.controls["state"].value,
        zip: this.sponsorForm.controls["zip_code"].value,
        country: this.sponsorForm.controls["country"].value
      }
    }
    this.CmsService.editSponsor(payload, this.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("sponsor edit successfully", "sponsor edit")
        this.ngxLoader.stop()
        this.route.navigate(['/crm/sponsor'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }
  submitForm() {
    this.ngxLoader.start();
    if (this.editMode) {
      this.editSponsor()
    } else {
      this.addSponsor()
    }
}
onToggleSidebar(sidebarState: any) {
  if (sidebarState === 'open') {
    this.sidebarSpacing = 'contracted';
  } else {
    this.sidebarSpacing = 'expanded';
  }
}
}
