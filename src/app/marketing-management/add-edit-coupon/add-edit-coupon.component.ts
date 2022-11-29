import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CouponCode } from 'src/app/_models/marketingModule';
import { MarketingService } from 'src/app/_services/marketing';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { CommonService } from 'src/app/_services/common';

@Component({
  selector: 'app-add-edit-coupon',
  templateUrl: './add-edit-coupon.component.html',
  styleUrls: ['./add-edit-coupon.component.scss']
})
export class AddEditCouponComponent implements OnInit {
  sidebarSpacing: string;
  promotionForm: FormGroup;
  promoId: number;
  promoList : CouponCode[] =[];
  editMode: boolean = false;
  title: string = ' ';
  expand: boolean = false;
  payload: CouponCode;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrMsgService,
    private ngxLoader: NgxUiLoaderService,
    private promoService: MarketingService,
    private activateRoute: ActivatedRoute,
    private CommonService: CommonService,
    private route: Router
  ) {
    this.promotionForm = this.fb.group({
      Country: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      Code: ['', [Validators.required]],
      couponType: ['', [Validators.required]],
      CustomerId: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      quotaPerUser: ['', [Validators.required]],
      firstTimeUser: ['', [Validators.required]],
      status: ['', [Validators.required]],
      maxDiscountAmount: ['', [Validators.required]],
      miniBillAmount: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      date: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe((params) => {
      this.promoId = parseInt(params.get('id'));
      console.log("promo id " + this.promoId);
      if (this.promoId && this.promoId != undefined) {
        this.editMode = true;
        this.title = 'Edit Promo';
        this.getPromoById()
      } else {
        this.editMode = false;
        this.expand = true;
        this.title = 'Add New Promotion';
      }
    })
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  getPromoById() {
    this.promoService
      .getCouponCodeById(this.promoId)
      .subscribe((res) => {
        this.promotionForm.patchValue({
          Country: res.Country,
          Title: res.Title,
          Code: res.Code,
          couponType: res.couponType,
          CustomerId: res.CustomerId,
          startDate: res.startDate,
          endDate: res.endDate,
          quotaPerUser: res.quotaPerUser,
          firstTimeUser: res.firstTimeUser,
          status: res.status,
          maxDiscountAmount: res.maxDiscountAmount,
          miniBillAmount: res.miniBillAmount,
          discount: res.discount,
          date: res.date,
          description: res.description,
        });
      });
  }

  submitPromo(){
    this.payload = {
      id: parseInt(this.CommonService.generateRandomeOrderId()),
      Country: this.promotionForm.controls['Country'].value,
      Title: this.promotionForm.controls['Title'].value,
      Code: this.promotionForm.controls['Code'].value,
      couponType: this.promotionForm.controls['couponType'].value,
      CustomerId: this.promotionForm.controls['CustomerId'].value,
      startDate: this.promotionForm.controls['startDate'].value,
      endDate: this.promotionForm.controls['endDate'].value,
      quotaPerUser: this.promotionForm.controls['quotaPerUser'].value,
      firstTimeUser: this.promotionForm.controls['firstTimeUser'].value,
      status: this.promotionForm.controls['status'].value,
      maxDiscountAmount: this.promotionForm.controls['maxDiscountAmount'].value,
      miniBillAmount: this.promotionForm.controls['miniBillAmount'].value,
      discount: this.promotionForm.controls['discount'].value,
      date: this.promotionForm.controls['date'].value,
      description: this.promotionForm.controls['description'].value,
    }
    this.promoService.addCouponCode(this.payload).subscribe(res => {
      if(res){
        this.toastr.showSuccess("Promotion Created Successfully", 'Success!');
        this.route.navigate(['/marketing'])
      } else {
        this.toastr.showError("Something going wrong ", "Promotion creation failed")
        this.route.navigate(['/marketing'])
      }
      console.log(this.payload)
    })
  }
}
