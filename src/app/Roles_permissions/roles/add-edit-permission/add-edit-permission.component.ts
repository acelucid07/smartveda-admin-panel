import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/_services/permission.service';

@Component({
  selector: 'app-add-edit-permission',
  templateUrl: './add-edit-permission.component.html',
  styleUrls: ['./add-edit-permission.component.scss']
})
export class AddEditPermissionComponent implements OnInit {
permissionData=[
{
  moduleName:'Order',
  subModuleName:'Order List',
  nameForForm:'OrderList'
},
{
  moduleName:'Order',
  subModuleName:'Order Transaction',
  nameForForm:'OrderTransaction'
},
{
  moduleName:'Order',
  subModuleName:'Shipment',
  nameForForm:'OrderShipment'
},
{
  moduleName:'Catalog',
  subModuleName:'Category',
  nameForForm:'CatalogCategory'
},
{
  moduleName:'Catalog',
  subModuleName:'Product',
  nameForForm:'CatalogProduct'
},
{
  moduleName:'Marketing',
  subModuleName:'Coupon',
  nameForForm:'MarketingCoupon'
},
{
  moduleName:'Marketing',
  subModuleName:'Rewards',
  nameForForm:'MarketingRewards'
},
{
  moduleName:'CMS',
  subModuleName:'Banner',
  nameForForm:'CmsBanner'
},
{
  moduleName:'CMS',
  subModuleName:'Slider',
  nameForForm:'CmsSlider'
},
{
  moduleName:'Profile',
  subModuleName:'-',
  nameForForm:'ProfileModule'
}]

get permissions() : FormArray {
  return this.permissionForm.get("permission") as FormArray
}

permissionForm:FormGroup
  constructor(private permissionService:PermissionService,private route:Router) { 
    this.permissionForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      OrderList: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false),
        view: new FormControl(false),
      }),
      OrderTransaction: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false),
        view: new FormControl(false),
      }),
      OrderShipment: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false),
        view: new FormControl(false),
      }),
      CatalogProduct: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false),
        view: new FormControl(false),
      }),
      CatalogCategory: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false),
        view: new FormControl(false),
      }),
      MarketingCoupon: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false),
        view: new FormControl(false),
      }),
      MarketingRewards: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false),
        view: new FormControl(false),
      }),
      CmsBanner: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false),
        view: new FormControl(false),
      }),
      CmsSlider: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false),
        view: new FormControl(false),
      }),
      ProfileModule: new FormGroup({
        add: new FormControl(false),
        edit: new FormControl(false),
        delete: new FormControl(false),
        view: new FormControl(false),
      })
    });
  }


  ngOnInit(): void {
  }

  newPermission(): FormGroup {
    return new FormGroup({
      moduleName: new FormControl(),
      submoduleName: new FormControl(),
      add:new FormControl(false),
      edit:new FormControl(false),
      delete: new FormControl(false),
      view: new FormControl(false)
    })
 }

  addPermissions() {
    this.permissions.push(this.newPermission());
 }
 submit()
 {
  let modules=[]
  let orderListFormGroup=  (this.permissionForm.controls['OrderList']) as FormGroup
  let orderTransactionFormGroup=  (this.permissionForm.controls['OrderTransaction']) as FormGroup
  let orderShipmentFormGroup=  (this.permissionForm.controls['OrderShipment']) as FormGroup
  let catalogProductFormGroup=  (this.permissionForm.controls['CatalogProduct']) as FormGroup
  let catalogCategoryFormGroup=  (this.permissionForm.controls['CatalogCategory']) as FormGroup
  let marketingCouponFormGroup=  (this.permissionForm.controls['MarketingCoupon']) as FormGroup
  let marketingRewardsFormGroup=  (this.permissionForm.controls['MarketingRewards']) as FormGroup
  let cmsBannerFormGroup=  (this.permissionForm.controls['CmsBanner']) as FormGroup
  let cmsSliderFormGroup=  (this.permissionForm.controls['CmsSlider']) as FormGroup
  let profileModuleFormGroup=  (this.permissionForm.controls['ProfileModule']) as FormGroup
  
  if(Object.values(orderListFormGroup.value).includes(true) || Object.values(orderShipmentFormGroup.value).includes(true)||Object.values(orderTransactionFormGroup.value).includes(true))
  {
    modules.push('Orders')
  }
  if(Object.values(catalogProductFormGroup.value).includes(true) || Object.values(catalogCategoryFormGroup.value).includes(true))
  {
    modules.push('Catalog')
  }
  if(Object.values(marketingCouponFormGroup.value).includes(true) || Object.values(marketingRewardsFormGroup.value).includes(true))
  {
    modules.push('Marketing')
  }
  if(Object.values(cmsBannerFormGroup.value).includes(true) || Object.values(cmsSliderFormGroup.value).includes(true))
  {
    modules.push('CMS')
  }
  if(Object.values(profileModuleFormGroup.value).includes(true))
  {
   modules.push('Profile')
  }
  

  let payload={
    username:this.permissionForm.controls['username'].value,
    orderList:
    {
      add:orderListFormGroup.controls['add'].value,
      edit:orderListFormGroup.controls['edit'].value,
      view:orderListFormGroup.controls['view'].value,
      delete:orderListFormGroup.controls['delete'].value
    },
    orderTransaction:{
      add:orderTransactionFormGroup.controls['add'].value,
      edit:orderTransactionFormGroup.controls['edit'].value,
      view:orderTransactionFormGroup.controls['view'].value,
      delete:orderTransactionFormGroup.controls['delete'].value
    },
    orderShipment:{
      add:orderShipmentFormGroup.controls['add'].value,
      edit:orderShipmentFormGroup.controls['edit'].value,
      view:orderShipmentFormGroup.controls['view'].value,
      delete:orderShipmentFormGroup.controls['delete'].value
    },
    CatalogProduct:{
      add:catalogProductFormGroup.controls['add'].value,
      edit:catalogProductFormGroup.controls['edit'].value,
      view:catalogProductFormGroup.controls['view'].value,
      delete:catalogProductFormGroup.controls['delete'].value
    },
    CatalogCategory:{
      add:catalogCategoryFormGroup.controls['add'].value,
      edit:catalogCategoryFormGroup.controls['edit'].value,
      view:catalogCategoryFormGroup.controls['view'].value,
      delete:catalogCategoryFormGroup.controls['delete'].value
    },
    MarketingCoupon:{
      add:marketingCouponFormGroup.controls['add'].value,
      edit:marketingCouponFormGroup.controls['edit'].value,
      view:marketingCouponFormGroup.controls['view'].value,
      delete:marketingCouponFormGroup.controls['delete'].value
    },
    MarketingRewards:{
      add:marketingRewardsFormGroup.controls['add'].value,
      edit:marketingRewardsFormGroup.controls['edit'].value,
      view:marketingRewardsFormGroup.controls['view'].value,
      delete:marketingRewardsFormGroup.controls['delete'].value
    },
    CmsBanner:{
      add:cmsBannerFormGroup.controls['add'].value,
      edit:cmsBannerFormGroup.controls['edit'].value,
      view:cmsBannerFormGroup.controls['view'].value,
      delete:cmsBannerFormGroup.controls['delete'].value
    },
    CmsSlider:{
      add:cmsSliderFormGroup.controls['add'].value,
      edit:cmsSliderFormGroup.controls['edit'].value,
      view:cmsSliderFormGroup.controls['view'].value,
      delete:cmsSliderFormGroup.controls['delete'].value
    },
    ProfileModule:{
      add:profileModuleFormGroup.controls['add'].value,
      edit:profileModuleFormGroup.controls['edit'].value,
      view:profileModuleFormGroup.controls['view'].value,
      delete:profileModuleFormGroup.controls['delete'].value
    },
    moduleArray:modules
  }

  let payloadForList={
username:payload.username,
modules:payload.moduleArray
  }
  this.permissionService.submitPermissionDetail(payloadForList).subscribe((res)=>{
    if(res)
    this.route.navigate(['/roleandpermission/adminlist']);
  })
  // if(Object.values(payload.CmsBanner).includes(true) || Object.values(payload.CmsSlider).includes(true))
  // {
  //   modules.push('CMS')
  // }
  // if(Object.values(payload.ProfileModule).includes(true))
  // {
  //  modules.push('Profile')
  // }

  // let orderlistFormGroup=  (this.permissionForm.controls['OrderList']) as FormGroup
  console.log(payload)

 }
 
}
