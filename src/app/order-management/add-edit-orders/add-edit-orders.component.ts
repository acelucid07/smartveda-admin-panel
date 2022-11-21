import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  order,
  Shipping_Address,
  Billing_Address,
} from 'src/app/_models/order';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/_services/orders.service';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-add-edit-orders',
  templateUrl: './add-edit-orders.component.html',
  styleUrls: ['./add-edit-orders.component.scss'],
})
export class AddEditOrdersComponent implements OnInit {
  sidebarSpacing: any;
  ordersForm: FormGroup;
  Shipping_Address: Shipping_Address;
  Billing_Address: Billing_Address;
  order: order;
  orderId: any;
  editMode: boolean = false;
  title: string = ' ';
  payload: order;
  expand: boolean = false;

  constructor(
    private fb: FormBuilder,
    private ordersService: OrdersService,
    private activateRoute: ActivatedRoute,
    private route: Router,
    private toastr: ToastrMsgService,
    private ngxLoader: NgxUiLoaderService
  ) {
    this.ordersForm = this.fb.group({
      orderId: ['', [Validators.required]],
      customerId: ['', [Validators.required]],
      orderDate: ['', [Validators.required]],
      orderNo: ['', [Validators.required]],
      orderStatus: ['', [Validators.required]],
      paymentStatus: ['', [Validators.required]],
      deliveryType: ['', [Validators.required]],
      deliveryStatus: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
      total: ['', [Validators.required]],
      country: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      billingPinCode: ['', [Validators.required]],
      billingFlatNo: ['', [Validators.required]],
      billingHouseNo: ['', [Validators.required]],
      billingBuildingName: ['', [Validators.required]],
      billingApartmentName: ['', [Validators.required]],
      billingArea: ['', [Validators.required]],
      billingStreetName: ['', [Validators.required]],
      billingSectorName: ['', [Validators.required]],
      billingVillageName: ['', [Validators.required]],
      billingLandmark: ['', [Validators.required]],
      billingCity: ['', [Validators.required]],
      billingTown: ['', [Validators.required]],
      shippingPinCode: ['', [Validators.required]],
      shippingFlatNo: ['', [Validators.required]],
      shippingHouseNo: ['', [Validators.required]],
      shippingBuildingName: ['', [Validators.required]],
      shippingApartmentName: ['', [Validators.required]],
      shippingArea: ['', [Validators.required]],
      shippingStreetName: ['', [Validators.required]],
      shippingSectorName: ['', [Validators.required]],
      shippingVillageName: ['', [Validators.required]],
      shippingLandmark: ['', [Validators.required]],
      shippingCity: ['', [Validators.required]],
      shippingTown: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe((params) => {
      this.orderId = params.get('orderId');
      if (this.orderId && this.orderId != undefined) {
        this.editMode = true;
        this.title = 'Edit Order';
        this.getOrderById();
      } else {
        this.editMode = false;
        this.expand = true;
        this.title = 'Add New order';
      }
    });
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  getOrderById() {
    this.ordersService
      .getOrderDetailsBy(parseInt(this.orderId))
      .subscribe((res) => {
        this.ordersForm.patchValue({
          orderId: res.orderId,
          customerId: res.customerId,
          orderDate: res.orderDate,
          orderNo: res.orderNo,
          paymentStatus: res.paymentStatus,
          deliveryType: res.deliveryType,
          deliveryStatus: res.deliveryStatus,
          paymentType: res.paymentType,
          total: res.total,
          country: res.country,
          orderStatus: res.orderStatus,
          email: res.email,
          mobileNo: res.mobileNo,
          shippingPinCode: res.Shipping_address.shippingPinCode,
          shippingFlatNo: res.Shipping_address.shippingFlatNo,
          shippingHouseNo: res.Shipping_address.shippingHouseNo,
          shippingBuildingName: res.Shipping_address.shippingBuildingName,
          shippingApartmentName: res.Shipping_address.shippingApartmentName,
          shippingArea: res.Shipping_address.shippingArea,
          shippingStreetName: res.Shipping_address.shippingStreetName,
          shippingVillageName: res.Shipping_address.shippingVillageName,
          shippingLandmark: res.Shipping_address.shippingLandmark,
          shippingCity: res.Shipping_address.shippingCity,
          shippingTown: res.Shipping_address.shippingTown,
          shippingSectorName: res.Shipping_address.shippingSectorName,
          billingPinCode: res.Billing_address.billingPinCode,
          billingFlatNo: res.Billing_address.billingFlatNo,
          billingHouseNo: res.Billing_address.billingHouseNo,
          billingBuildingName: res.Billing_address.billingBuildingName,
          billingApartmentName: res.Billing_address.billingApartmentName,
          billingStreetName: res.Billing_address.billingStreetName,
          billingArea: res.Billing_address.billingArea,
          billingSectorName: res.Billing_address.billingSectorName,
          billingVillageName: res.Billing_address.billingVillageName,
          billingLandmark: res.Billing_address.billingLandmark,
          billingCity: res.Billing_address.billingCity,
          billingTown: res.Billing_address.billingTown,
        });
        console.log(res);
        console.log(this.ordersForm.value);
      });
  }
  submitForm() {
    this.Billing_Address = {
      billingPinCode: this.ordersForm.controls['billingPinCode'].value,
      billingFlatNo: this.ordersForm.controls['billingFlatNo'].value,
      billingHouseNo: this.ordersForm.controls['billingHouseNo'].value,
      billingBuildingName:
        this.ordersForm.controls['billingBuildingName'].value,
      billingApartmentName:
        this.ordersForm.controls['billingApartmentName'].value,
      billingStreetName: this.ordersForm.controls['billingStreetName'].value,
      billingArea: this.ordersForm.controls['billingArea'].value,
      billingSectorName: this.ordersForm.controls['billingSectorName'].value,
      billingVillageName: this.ordersForm.controls['billingVillageName'].value,
      billingLandmark: this.ordersForm.controls['billingLandmark'].value,
      billingCity: this.ordersForm.controls['billingCity'].value,
      billingTown: this.ordersForm.controls['billingTown'].value,
    };
    this.Shipping_Address = {
      shippingPinCode: this.ordersForm.controls['shippingPinCode'].value,
      shippingFlatNo: this.ordersForm.controls['shippingFlatNo'].value,
      shippingHouseNo: this.ordersForm.controls['shippingHouseNo'].value,
      shippingBuildingName:
        this.ordersForm.controls['shippingBuildingName'].value,
      shippingApartmentName:
        this.ordersForm.controls['shippingApartmentName'].value,
      shippingArea: this.ordersForm.controls['shippingArea'].value,
      shippingStreetName: this.ordersForm.controls['shippingStreetName'].value,
      shippingVillageName:
        this.ordersForm.controls['shippingVillageName'].value,
      shippingLandmark: this.ordersForm.controls['shippingLandmark'].value,
      shippingCity: this.ordersForm.controls['shippingCity'].value,
      shippingTown: this.ordersForm.controls['shippingTown'].value,
      shippingSectorName: this.ordersForm.controls['shippingSectorName'].value,
    };
    this.payload = {
      orderId: this.ordersForm.controls['orderId'].value,
      customerId: this.ordersForm.controls['customerId'].value,
      orderDate: this.ordersForm.controls['orderDate'].value,
      orderNo: this.ordersForm.controls['orderNo'].value,
      paymentStatus: this.ordersForm.controls['paymentStatus'].value,
      deliveryType: this.ordersForm.controls['deliveryType'].value,
      paymentType: this.ordersForm.controls['paymentType'].value,
      total: this.ordersForm.controls['total'].value,
      deliveryStatus: this.ordersForm.controls['deliveryStatus'].value,
      country: this.ordersForm.controls['country'].value,
      orderStatus: this.ordersForm.controls['orderStatus'].value,
      email: this.ordersForm.controls['email'].value,
      mobileNo: this.ordersForm.controls['mobileNo'].value,

      Shipping_address: this.Shipping_Address,
      Billing_address: this.Billing_Address,
    };
    console.log(this.payload);
    this.ngxLoader.start();
    if (this.editMode) {
      this.editProduct(this.payload);
    } else {
      this.addProduct(this.payload);
    }
  }
  editProduct(data: order) {
    this.ordersService
      .updateOrderStatus(parseInt(this.orderId), data)
      .subscribe((res) => {
        if (res) {
          this.toastr.showSuccess('order edit successfully', 'order edit');
          this.ngxLoader.stop();
          this.route.navigate(['/order']);
        }
        (error: any) => {
          this.toastr.showError('Somthing wrong Please check', 'Error occured');
          this.ngxLoader.stop();
          this.route.navigate(['/']);
        };
      });
  }
  addProduct(orderData: any) {
    this.ordersService.addOrders(orderData).subscribe((res) => {
      if (res) {
        this.toastr.showSuccess('Product added successfully', 'Product Added');
        this.ngxLoader.stop();
        this.route.navigate(['/order/createNewOrder']);
      }
      (error: any) => {
        this.toastr.showError('Somthing wrong Please check', 'Error occured');
        this.ngxLoader.stop();
        this.route.navigate(['/']);
      };
    });
  }
}
