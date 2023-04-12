import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionService } from 'src/app/_services/permission.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-add-edit-permission',
  templateUrl: './add-edit-permission.component.html',
  styleUrls: ['./add-edit-permission.component.scss']
})
export class AddEditPermissionComponent implements OnInit {
  userData: any[] = [];
  userlist: string[] = []
  name: string
  title: string
  permissionData = [
    {
      moduleName: 'Order',
      subModuleName: 'Order List',
      nameForForm: 'OrderList'
    },
    {
      moduleName: 'Order',
      subModuleName: 'Order Transaction',
      nameForForm: 'OrderTransaction'
    },
    {
      moduleName: 'Order',
      subModuleName: 'Shipment',
      nameForForm: 'OrderShipment'
    },
    {
      moduleName: 'Catalog',
      subModuleName: 'Category',
      nameForForm: 'CatalogCategory'
    },
    {
      moduleName: 'Catalog',
      subModuleName: 'Product',
      nameForForm: 'CatalogProduct'
    },
    {
      moduleName: 'Marketing',
      subModuleName: 'Coupon',
      nameForForm: 'MarketingCoupon'
    },
    {
      moduleName: 'Marketing',
      subModuleName: 'Rewards',
      nameForForm: 'MarketingRewards'
    },
    {
      moduleName: 'CMS',
      subModuleName: 'Banner',
      nameForForm: 'CmsBanner'
    },
    // {
    //   moduleName:'CMS',
    //   subModuleName:'Slider',
    //   nameForForm:'CmsSlider'
    // },
    {
      moduleName: 'Appointment',
      subModuleName: '-',
      nameForForm: 'AppointmentList'
    },
    {
      moduleName: 'User',
      subModuleName: 'User List',
      nameForForm: 'UserList'
    },
    {
      moduleName: 'Leads',
      subModuleName: 'Lead List',
      nameForForm: 'LeadList'
    },
    {
      moduleName:'Rating&Review',
      subModuleName:'Rating List',
      nameForForm:'RatingList'
    },
    {
      moduleName:'Rating&Review',
      subModuleName:'Review List',
      nameForForm:'ReviewList'
    },
    {
      moduleName:'Rating&Review',
      subModuleName:'Reviewer List',
      nameForForm:'ReviewerList'
    },
    {
      moduleName:'Rating&Review',
      subModuleName:'Rating Setting',
      nameForForm:'RatingSetting'
    },
    {
      moduleName:'Rating&Review',
      subModuleName:'Usertype Setting',
      nameForForm:'UsertypeSetting'
    },
    // {
    //   moduleName:'Profile',
    //   subModuleName:'-',
    //   nameForForm:'ProfileModule'
    // }
  ]

  // get permissions() : FormArray {
  //   return this.permissionForm.get("permission") as FormArray
  // }

  permissionForm: FormGroup
  constructor(private permissionService: PermissionService,
    private userService: UsersService,
    private route: Router,
    private activatedRoute: ActivatedRoute) {
      this.getUserList()
    this.permissionForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      OrderList: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      OrderTransaction: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      OrderShipment: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      CatalogProduct: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      CatalogCategory: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      MarketingCoupon: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      MarketingRewards: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      CmsBanner: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      // CmsSlider: new FormGroup({
      //   add: new FormControl(false),
      //   edit: new FormControl(false),
      //   delete: new FormControl(false),
      //   view: new FormControl(false),
      // }),
      // ProfileModule: new FormGroup({
      //   add: new FormControl(false),
      //   edit: new FormControl(false),
      //   delete: new FormControl(false),
      //   view: new FormControl(false),
      // }),
      AppointmentList: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      UserList: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      RatingList: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      ReviewList: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      ReviewerList: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      LeadList: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      RatingSetting: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      }),
      UsertypeSetting: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false)
      })

    });
    
  }

  ngOnInit(): void {
    
  }

  getPermissionDetail() {
    this.permissionService.getPermissionDetails(this.name).subscribe((res) => {
      if (res) {
        this.permissionForm.patchValue({ username: res[0].username }),
          (res[0].OrderList) ? this.permissionForm.patchValue(
            {
              OrderList: {
                add: res[0].OrderList.add,
                edit: res[0].OrderList.edit,
                delete: res[0].OrderList.delete
              }
            }) : null,
          (res[0].OrderTransaction) ?
            this.permissionForm.patchValue(
              {
                OrderTransaction: {
                  add: res[0].OrderTransaction.add,
                  edit: res[0].OrderTransaction.edit,
                  delete: res[0].OrderTransaction.delete
                }
              }) : null,
          (res[0].OrderShipment) ?
            this.permissionForm.patchValue(
              {
                OrderShipment: {
                  add: res[0].OrderShipment.add,
                  edit: res[0].OrderShipment.edit,
                  delete: res[0].OrderShipment.delete
                }
              }) : null,
          (res[0].OrderShipment) ?
            this.permissionForm.patchValue(
              {
                OrderShipment: {
                  add: res[0].OrderShipment.add,
                  edit: res[0].OrderShipment.edit,
                  delete: res[0].OrderShipment.delete
                }
              }) : null,
          (res[0].CatalogProduct) ? this.permissionForm.patchValue(
            {
              CatalogProduct: {
                add: res[0].CatalogProduct.add,
                edit: res[0].CatalogProduct.edit,
                delete: res[0].CatalogProduct.delete
              }
            }) : null,
          (res[0].CatalogCategory) ? this.permissionForm.patchValue(
            {
              CatalogCategory: {
                add: res[0].CatalogCategory.add,
                edit: res[0].CatalogCategory.edit,
                delete: res[0].CatalogCategory.delete
              }
            }) : null,
          (res[0].MarketingCoupon) ? this.permissionForm.patchValue(
            {
              MarketingCoupon: {
                add: res[0].MarketingCoupon.add,
                edit: res[0].MarketingCoupon.edit,
                delete: res[0].MarketingCoupon.delete
              }
            }) : null,
          (res[0].MarketingRewards) ? this.permissionForm.patchValue(
            {
              MarketingRewards: {
                add: res[0].MarketingRewards.add,
                edit: res[0].MarketingRewards.edit,
                delete: res[0].MarketingRewards.delete
              }
            }) : null,
          (res[0].MarketingRewards) ? this.permissionForm.patchValue(
            {
              MarketingRewards: {
                add: res[0].MarketingRewards.add,
                edit: res[0].MarketingRewards.edit,
                delete: res[0].MarketingRewards.delete
              }
            }) : null,
          (res[0].CmsBanner) ? this.permissionForm.patchValue(
            {
              CmsBanner: {
                add: res[0].CmsBanner.add,
                edit: res[0].CmsBanner.edit,
                delete: res[0].CmsBanner.delete
              }
            }) : null,
          (res[0].AppointmentList) ? this.permissionForm.patchValue(
            {
              AppointmentList: {
                add: res[0].AppointmentList.add,
                edit: res[0].AppointmentList.edit,
                delete: res[0].AppointmentList.delete
              }
            }) : null,
          (res[0].LeadList) ? this.permissionForm.patchValue(
            {
              LeadList: {
                add: res[0].LeadList.add,
                edit: res[0].LeadList.edit,
                delete: res[0].LeadList.delete
              }
            }) : null,
          (res[0].UserList) ? this.permissionForm.patchValue(
            {
              UserList: {
                add: res[0].UserList.add,
                edit: res[0].UserList.edit,
                delete: res[0].UserList.delete
              }
            }) : null,
            (res[0].RatingList) ? this.permissionForm.patchValue(
              {
                RatingList: {
                  add: res[0].RatingList.add,
                  edit: res[0].RatingList.edit,
                  delete: res[0].RatingList.delete
                }
              }) : null,
              (res[0].ReviewList) ? this.permissionForm.patchValue(
                {
                  ReviewList: {
                    add: res[0].ReviewList.add,
                    edit: res[0].ReviewList.edit,
                    delete: res[0].ReviewList.delete
                  }
                }) : null,
                (res[0].ReviewerList) ? this.permissionForm.patchValue(
                  {
                    ReviewerList: {
                      add: res[0].ReviewerList.add,
                      edit: res[0].ReviewerList.edit,
                      delete: res[0].ReviewerList.delete
                    }
                  }) : null,
                  (res[0].RatingSetting) ? this.permissionForm.patchValue(
                    {
                      RatingSetting: {
                        add: res[0].RatingSetting.add,
                        edit: res[0].RatingSetting.edit,
                        delete: res[0].RatingSetting.delete
                      }
                    }) : null,
                    (res[0].UsertypeSetting) ? this.permissionForm.patchValue(
                      {
                        UsertypeSetting: {
                          add: res[0].UsertypeSetting.add,
                          edit: res[0].UsertypeSetting.edit,
                          delete: res[0].UsertypeSetting.delete
                        }
                      }) : null
// this.permissionForm.get('OrderShipment.add').setValue(true)
// ,
// (res[0].CatalogProduct)?this.permissionForm.controls['CatalogProduct'].setValue(res[0].CatalogProduct):this.permissionForm.controls['CatalogProduct'].setValue({add:false,edit:false,delete:false}),
// (res[0].CatalogCategory)?this.permissionForm.controls['CatalogCategory'].setValue(res[0].CatalogCategory):this.permissionForm.controls['CatalogCategory'].setValue({add:false,edit:false,delete:false}),
// (res[0].MarketingCoupon)?this.permissionForm.controls['MarketingCoupon'].setValue(res[0].MarketingCoupon):this.permissionForm.controls['MarketingCoupon'].setValue({add:false,edit:false,delete:false}),
// (res[0].MarketingRewards)?this.permissionForm.controls['MarketingRewards'].setValue(res[0].MarketingRewards):this.permissionForm.controls['MarketingRewards'].setValue({add:false,edit:false,delete:false}),
// (res[0].CmsBanner)?this.permissionForm.controls['CmsBanner'].setValue(res[0].MarketingRewards):this.permissionForm.controls['CmsBanner'].setValue({add:false,edit:false,delete:false}),
// (res[0].MarketingRewards)?this.permissionForm.controls['MarketingRewards'].setValue(res[0].MarketingRewards):this.permissionForm.controls['MarketingRewards'].setValue({add:false,edit:false,delete:false}),
// (res[0].AppointmentList)?this.permissionForm.controls['AppointmentList'].setValue(res[0].AppointmentList):this.permissionForm.controls['AppointmentList'].setValue({add:false,edit:false,delete:false}),
// (res[0].LeadList)?this.permissionForm.controls['LeadList'].setValue(res[0].LeadList):this.permissionForm.controls['LeadList'].setValue({add:false,edit:false,delete:false}),
// (res[0].UserList)?this.permissionForm.controls['UserList'].setValue(res[0].UserList):this.permissionForm.controls['UserList'].setValue({add:false,edit:false,delete:false})


          //   orderTransaction: {
          //     add: res[0].orderTransaction.add,
          //     edit: res[0].orderTransaction.edit,
          //     delete: res[0].orderTransaction.delete
          //   },

          //   orderShipment: {
          //     add: res[0].orderShipment.add,
          //     edit: res[0].orderShipment.edit,
          //     delete: res[0].orderShipment.delete
          //   }
          // }
// )
}

      // this.route.navigate(['/modulepermission/rolelist']);
    })
  }
  //   newPermission(): FormGroup {
  //     return new FormGroup({
  //       moduleName: new FormControl(),
  //       submoduleName: new FormControl(),
  //       add:new FormControl(false),
  //       edit:new FormControl(false),
  //       delete: new FormControl(false),
  //       view: new FormControl(false)
  //     })
  //  }

  //   addPermissions() {
  //     this.permissions.push(this.newPermission());
  //  }

  getUserList() {
    this.userService.getUsers().subscribe((res: any) => {
      let userPermitted = []
      console.log(res.data)
      this.userData = res.data;
      if (res.data) {
        this.permissionService.getPermittedModuleList().subscribe((resValue) => {
          resValue.forEach(dataValue => {
            userPermitted.push(dataValue.username)
          })

          // console.log(userPermitted)
          this.userData = this.userData.map(val => {
            if (val.username && (val.username != '' || val.username != null) && val.role != 'superAdmin' && !userPermitted.includes(val.username)) {
              this.userlist.push(val.username)
              return val.username
            }
          })
          // console.log(this.userData, this.userlist)
          this.activatedRoute.queryParamMap.subscribe((params) => {
            this.name = params.get('user')
            if (this.name) {
              this.title = 'Edit';
              this.getPermissionDetail()
              Object.assign(this.userlist,userPermitted)
            }
            else {
              this.title = "Add";
            }
          })
        })
      }
    });
  }

  submit() {
    let modules = ['Dashboard']
    let payload = { }
    let orderListFormGroup = (this.permissionForm.controls['OrderList']) as FormGroup
    let orderTransactionFormGroup = (this.permissionForm.controls['OrderTransaction']) as FormGroup
    let orderShipmentFormGroup = (this.permissionForm.controls['OrderShipment']) as FormGroup
    let catalogProductFormGroup = (this.permissionForm.controls['CatalogProduct']) as FormGroup
    let catalogCategoryFormGroup = (this.permissionForm.controls['CatalogCategory']) as FormGroup
    let marketingCouponFormGroup = (this.permissionForm.controls['MarketingCoupon']) as FormGroup
    let marketingRewardsFormGroup = (this.permissionForm.controls['MarketingRewards']) as FormGroup
    let cmsBannerFormGroup = (this.permissionForm.controls['CmsBanner']) as FormGroup
    // let cmsSliderFormGroup=  (this.permissionForm.controls['CmsSlider']) as FormGroup
    // let profileModuleFormGroup=  (this.permissionForm.controls['ProfileModule']) as FormGroup
    let AppointmentListFormGroup = (this.permissionForm.controls['AppointmentList']) as FormGroup
    let leadListFormGroup = (this.permissionForm.controls['LeadList']) as FormGroup
    let userListFormGroup = (this.permissionForm.controls['UserList']) as FormGroup
    let ratingListFormGroup = (this.permissionForm.controls['RatingList']) as FormGroup
    let reviewListFormGroup = (this.permissionForm.controls['ReviewList']) as FormGroup
    let reviewerListFormGroup = (this.permissionForm.controls['ReviewerList']) as FormGroup
    let ratingSettingFormGroup = (this.permissionForm.controls['RatingSetting']) as FormGroup
    let usertypeSettingFormGroup = (this.permissionForm.controls['UsertypeSetting']) as FormGroup


    if (Object.values(orderListFormGroup.value).includes(true) || Object.values(orderShipmentFormGroup.value).includes(true) || Object.values(orderTransactionFormGroup.value).includes(true)) {
     console.log(Object.values(orderListFormGroup.value).includes(true),Object.values(orderShipmentFormGroup.value).includes(true),Object.values(orderTransactionFormGroup.value).includes(true))
      modules.push('Order');
      // Object.assign(payload, {
        // orderList:
        // {
        //   add: orderListFormGroup.controls['add'].value,
        //   edit: orderListFormGroup.controls['edit'].value,
        //   view: orderListFormGroup.controls['view'].value,
        //   delete: orderListFormGroup.controls['delete'].value
        // }, orderTransaction: {
        //   add: orderTransactionFormGroup.controls['add'].value,
        //   edit: orderTransactionFormGroup.controls['edit'].value,
        //   view: orderTransactionFormGroup.controls['view'].value,
        //   delete: orderTransactionFormGroup.controls['delete'].value
        // },
        // orderShipment: {
        //   add: orderShipmentFormGroup.controls['add'].value,
        //   edit: orderShipmentFormGroup.controls['edit'].value,
        //   view: orderShipmentFormGroup.controls['view'].value,
        //   delete: orderShipmentFormGroup.controls['delete'].value
        // },
      //   moduleList: modules
      // })
    }
    if (Object.values(catalogProductFormGroup.value).includes(true) || Object.values(catalogCategoryFormGroup.value).includes(true)) {
      modules.push('Catalog')
      // Object.assign(payload, {
      //   CatalogProduct: {
      //     add: catalogProductFormGroup.controls['add'].value,
      //     edit: catalogProductFormGroup.controls['edit'].value,
      //     view: catalogProductFormGroup.controls['view'].value,
      //     delete: catalogProductFormGroup.controls['delete'].value
      //   },
      //   CatalogCategory: {
      //     add: catalogCategoryFormGroup.controls['add'].value,
      //     edit: catalogCategoryFormGroup.controls['edit'].value,
      //     view: catalogCategoryFormGroup.controls['view'].value,
      //     delete: catalogCategoryFormGroup.controls['delete'].value
      //   },
      //   moduleList: modules
      // })
    }
    if (Object.values(marketingCouponFormGroup.value).includes(true) || Object.values(marketingRewardsFormGroup.value).includes(true)) {
      modules.push('Marketing')
      // Object.assign(payload, {
      //   MarketingCoupon: {
      //     add: marketingCouponFormGroup.controls['add'].value,
      //     edit: marketingCouponFormGroup.controls['edit'].value,
      //     view: marketingCouponFormGroup.controls['view'].value,
      //     delete: marketingCouponFormGroup.controls['delete'].value
      //   },
      //   MarketingRewards: {
      //     add: marketingRewardsFormGroup.controls['add'].value,
      //     edit: marketingRewardsFormGroup.controls['edit'].value,
      //     view: marketingRewardsFormGroup.controls['view'].value,
      //     delete: marketingRewardsFormGroup.controls['delete'].value
      //   },
      //   moduleList: modules
      // })
    }
    if (Object.values(cmsBannerFormGroup.value).includes(true)) {
      modules.push('CMS')
      // Object.assign(payload, {
      //   CmsBanner: {
      //     add: cmsBannerFormGroup.controls['add'].value,
      //     edit: cmsBannerFormGroup.controls['edit'].value,
      //     view: cmsBannerFormGroup.controls['view'].value,
      //     delete: cmsBannerFormGroup.controls['delete'].value
      //   },
        // CmsSlider:{
        //   add:cmsSliderFormGroup.controls['add'].value,
        //   edit:cmsSliderFormGroup.controls['edit'].value,
        //   view:cmsSliderFormGroup.controls['view'].value,
        //   delete:cmsSliderFormGroup.controls['delete'].value
        // },
      //   moduleList: modules
      // })
    }
    if (Object.values(AppointmentListFormGroup.value).includes(true)) {
      modules.push('Appointment')
      // Object.assign(payload, {
      //   AppointmentList: {
      //     add: AppointmentListFormGroup.controls['add'].value,
      //     edit: AppointmentListFormGroup.controls['edit'].value,
      //     view: AppointmentListFormGroup.controls['view'].value,
      //     delete: AppointmentListFormGroup.controls['delete'].value
      //   },
      //   moduleList: modules
      // })
    }
    if (Object.values(leadListFormGroup.value).includes(true)) {
      modules.push('Leads')
      // Object.assign(payload, {
      //   LeadList: {
      //     add: leadListFormGroup.controls['add'].value,
      //     edit: leadListFormGroup.controls['edit'].value,
      //     view: leadListFormGroup.controls['view'].value,
      //     delete: leadListFormGroup.controls['delete'].value
      //   },
      //   moduleList: modules
      // })
    }
    if (Object.values(userListFormGroup.value).includes(true)) {
      modules.push('User')
      // Object.assign(payload, {
      //   UserList: {
      //     add: userListFormGroup.controls['add'].value,
      //     edit: userListFormGroup.controls['edit'].value,
      //     view: userListFormGroup.controls['view'].value,
      //     delete: userListFormGroup.controls['delete'].value
      //   },
      //   moduleList: modules
      // })
    }
    if (Object.values(ratingListFormGroup.value).includes(true)||Object.values(reviewListFormGroup.value).includes(true)||Object.values(reviewerListFormGroup.value).includes(true)||Object.values(ratingSettingFormGroup.value).includes(true)||Object.values(usertypeSettingFormGroup.value).includes(true)) {
      // console.log(Object.values(ratingListFormGroup.value).includes(true),)
      modules.push('Rating & Review')
      // Object.assign(payload, {
      //   RatingList: {
      //     add: ratingListFormGroup.controls['add'].value,
      //     edit: ratingListFormGroup.controls['edit'].value,
      //     view: ratingListFormGroup.controls['view'].value,
      //     delete: ratingListFormGroup.controls['delete'].value
      //   },
      //   ReviewList: {
      //     add: reviewListFormGroup.controls['add'].value,
      //     edit: reviewListFormGroup.controls['edit'].value,
      //     view: reviewListFormGroup.controls['view'].value,
      //     delete: reviewListFormGroup.controls['delete'].value
      //   },
      //   ReviewerList: {
      //     add: reviewerListFormGroup.controls['add'].value,
      //     edit: reviewerListFormGroup.controls['edit'].value,
      //     view: reviewerListFormGroup.controls['view'].value,
      //     delete:reviewerListFormGroup.controls['delete'].value
      //   },
      //   RatingSetting: {
      //     add: ratingSettingFormGroup.controls['add'].value,
      //     edit:ratingSettingFormGroup.controls['edit'].value,
      //     view: ratingSettingFormGroup.controls['view'].value,
      //     delete:ratingSettingFormGroup.controls['delete'].value
      //   },
      //   UsertypeSetting:{
      //     add: usertypeSettingFormGroup.controls['add'].value,
      //     edit: usertypeSettingFormGroup.controls['edit'].value,
      //     view: usertypeSettingFormGroup.controls['view'].value,
      //     delete: usertypeSettingFormGroup.controls['delete'].value
      //   },
      //   moduleList: modules
      // })
    }
    // if(Object.values(profileModuleFormGroup.value).includes(true))
    // {
    //  modules.push('Profile')
    //  Object.assign(payload,{ProfileModule:{
    //   add:profileModuleFormGroup.controls['add'].value,
    //   edit:profileModuleFormGroup.controls['edit'].value,
    //   view:profileModuleFormGroup.controls['view'].value,
    //   delete:profileModuleFormGroup.controls['delete'].value
    // },
    // moduleList:modules})
    // }


    // payload={
    //   username:this.permissionForm.controls['username'].value,
    //   orderList:
    //   {
    //     add:orderListFormGroup.controls['add'].value,
    //     edit:orderListFormGroup.controls['edit'].value,
    //     view:orderListFormGroup.controls['view'].value,
    //     delete:orderListFormGroup.controls['delete'].value
    //   },
    //   orderTransaction:{
    //     add:orderTransactionFormGroup.controls['add'].value,
    //     edit:orderTransactionFormGroup.controls['edit'].value,
    //     view:orderTransactionFormGroup.controls['view'].value,
    //     delete:orderTransactionFormGroup.controls['delete'].value
    //   },
    //   orderShipment:{
    //     add:orderShipmentFormGroup.controls['add'].value,
    //     edit:orderShipmentFormGroup.controls['edit'].value,
    //     view:orderShipmentFormGroup.controls['view'].value,
    //     delete:orderShipmentFormGroup.controls['delete'].value
    //   },
    //   CatalogProduct:{
    //     add:catalogProductFormGroup.controls['add'].value,
    //     edit:catalogProductFormGroup.controls['edit'].value,
    //     view:catalogProductFormGroup.controls['view'].value,
    //     delete:catalogProductFormGroup.controls['delete'].value
    //   },
    //   CatalogCategory:{
    //     add:catalogCategoryFormGroup.controls['add'].value,
    //     edit:catalogCategoryFormGroup.controls['edit'].value,
    //     view:catalogCategoryFormGroup.controls['view'].value,
    //     delete:catalogCategoryFormGroup.controls['delete'].value
    //   },
    //   MarketingCoupon:{
    //     add:marketingCouponFormGroup.controls['add'].value,
    //     edit:marketingCouponFormGroup.controls['edit'].value,
    //     view:marketingCouponFormGroup.controls['view'].value,
    //     delete:marketingCouponFormGroup.controls['delete'].value
    //   },
    //   MarketingRewards:{
    //     add:marketingRewardsFormGroup.controls['add'].value,
    //     edit:marketingRewardsFormGroup.controls['edit'].value,
    //     view:marketingRewardsFormGroup.controls['view'].value,
    //     delete:marketingRewardsFormGroup.controls['delete'].value
    //   },
    //   CmsBanner:{
    //     add:cmsBannerFormGroup.controls['add'].value,
    //     edit:cmsBannerFormGroup.controls['edit'].value,
    //     view:cmsBannerFormGroup.controls['view'].value,
    //     delete:cmsBannerFormGroup.controls['delete'].value
    //   },
    //   CmsSlider:{
    //     add:cmsSliderFormGroup.controls['add'].value,
    //     edit:cmsSliderFormGroup.controls['edit'].value,
    //     view:cmsSliderFormGroup.controls['view'].value,
    //     delete:cmsSliderFormGroup.controls['delete'].value
    //   },
    //   ProfileModule:{
    //     add:profileModuleFormGroup.controls['add'].value,
    //     edit:profileModuleFormGroup.controls['edit'].value,
    //     view:profileModuleFormGroup.controls['view'].value,
    //     delete:profileModuleFormGroup.controls['delete'].value
    //   },
    //   moduleList:modules
    // }

    //   let payloadForList={
    // username:payload.username,
    // modules:modules
    //   }
    // this.permissionService.submitPermissionDetail(payloadForList).subscribe((res)=>{
    //   if(res)
    //   this.route.navigate(['/modulepermission/rolelist']);
    // })
    // if(Object.values(payload.CmsBanner).includes(true) || Object.values(payload.CmsSlider).includes(true))
    // {
    //   modules.push('CMS')
    // }
    // if(Object.values(payload.ProfileModule).includes(true))
    // {
    //  modules.push('Profile')
    // }

    // let orderlistFormGroup=  (this.permissionForm.controls['OrderList']) as FormGroup
    console.log(this.permissionForm);
    Object.assign(payload, {moduleList:modules})
    Object.assign(payload, this.permissionForm.value)
    console.log(payload),
    (this.name)?this.submitEditedPermissionDetails(payload):this.submitPermissionDetails(payload)
  }
  submitPermissionDetails(payload:any){
    this.permissionService.submitPermissionDetail({ Data: payload }).subscribe((res) => {
      if (res)
        this.route.navigate(['/modulepermission/rolelist']);
    })}
    submitEditedPermissionDetails(payload:any){
      this.permissionService.submitEditedPermissionDetail({ Data: payload },this.name).subscribe((res) => {
        if (res)
          this.route.navigate(['/modulepermission/rolelist']);
    })
  }

}
