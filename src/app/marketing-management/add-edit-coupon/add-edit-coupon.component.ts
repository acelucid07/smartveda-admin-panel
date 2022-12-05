import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CouponCode } from 'src/app/_models/marketingModule';
import { MarketingService } from 'src/app/_services/marketing';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { CommonService } from 'src/app/_services/common';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-add-edit-coupon',
  templateUrl: './add-edit-coupon.component.html',
  styleUrls: ['./add-edit-coupon.component.scss']
})
export class AddEditCouponComponent implements OnInit {
  sidebarSpacing: string;
  promotionForm: FormGroup;
  promoId: number;
  promoList: CouponCode[] = [];
  editMode: boolean = false;
  title: string = ' ';
  expand: boolean = false;
  payload: CouponCode;
  customer: any;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrMsgService,
    private ngxLoader: NgxUiLoaderService,
    private promoService: MarketingService,
    private activateRoute: ActivatedRoute,
    private CommonService: CommonService,
    private route: Router,
    private userService: UsersService
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
    this.getCustomer()
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  addPromo(data: CouponCode) {
    this.promoService.addCouponCode(data).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Promotion Created Successfully", 'Success!');
        this.route.navigate(['/marketing'])
      } else {
        this.toastr.showError("Something going wrong ", "Promotion creation failed")
        this.route.navigate(['/marketing'])
      }
    })
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
          CustomerId: this.customer,
          startDate: this.CommonService.convertDate(res.startDate),
          endDate: this.CommonService.convertDate(res.endDate),
          quotaPerUser: res.quotaPerUser,
          firstTimeUser: res.firstTimeUser,
          status: res.status,
          maxDiscountAmount: res.maxDiscountAmount,
          miniBillAmount: res.miniBillAmount,
          discount: res.discount,
          date: this.CommonService.convertDate(res.date),
          description: res.description,
        });
        console.log(this.promotionForm.value)
      });
  }

  submitPromo() {
    this.payload = {
      id: parseInt(this.CommonService.generateRandomeOrderId()),
      Country: this.promotionForm.controls['Country'].value,
      Title: this.promotionForm.controls['Title'].value,
      Code: this.promotionForm.controls['Code'].value,
      couponType: this.promotionForm.controls['couponType'].value,
      CustomerId: this.promotionForm.controls['CustomerId'].value,
      startDate: this.CommonService.convertDate(this.promotionForm.controls['startDate'].value),
      endDate: this.CommonService.convertDate(this.promotionForm.controls['endDate'].value),
      quotaPerUser: this.promotionForm.controls['quotaPerUser'].value,
      firstTimeUser: this.promotionForm.controls['firstTimeUser'].value,
      status: this.promotionForm.controls['status'].value,
      maxDiscountAmount: this.promotionForm.controls['maxDiscountAmount'].value,
      miniBillAmount: this.promotionForm.controls['miniBillAmount'].value,
      discount: this.promotionForm.controls['discount'].value,
      date: this.CommonService.convertDate(this.promotionForm.controls['date'].value),
      description: this.promotionForm.controls['description'].value,
    }
    this.ngxLoader.start();
    if (this.editMode) {
      this.editPromo(this.payload)
      console.log(this.payload)
    } else {
      this.addPromo(this.payload)
      console.log(this.payload)
    }
  }

  editPromo(editData: CouponCode) {
    this.promoService.editCouponCode(editData, this.promoId).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Promo code edit successfully", "Promo edit")
        this.ngxLoader.stop()
        this.route.navigate(['/marketing'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/marketing'])
      }
    })
  }
  getCustomer() {
    this.userService.getUsers().subscribe((res: any) => {
      this.customer = res.data
    })
  }

}
