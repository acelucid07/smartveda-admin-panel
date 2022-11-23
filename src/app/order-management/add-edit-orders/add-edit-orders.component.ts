import { Component, OnInit } from '@angular/core';
import { order, Shipping_Address, Billing_Address, } from 'src/app/_models/order';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/_services/orders.service';
import { ProductService } from 'src/app/_services/product.service'
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { product_details } from 'src/app/_models/catalog';
@Component({
  selector: 'app-add-edit-orders',
  templateUrl: './add-edit-orders.component.html',
  styleUrls: ['./add-edit-orders.component.scss']
})
export class AddEditOrdersComponent implements OnInit {

  sidebarSpacing: any;
  Mode: string = '';
  ordersForm: FormGroup;
  showdialog: boolean = false
  ProductList: product_details[] = [];
  Shipping_Address: Shipping_Address;
  Billing_Address: Billing_Address;
  order: order;
  orderId: number;
  editMode: boolean = false;
  title: string = ' ';
  payload: order;
  expand: boolean = false;
  products: product_details[]
  constructor(private fb: FormBuilder,
    private ordersService: OrdersService,
    private activateRoute: ActivatedRoute,
    private ProductService: ProductService,
    private route: Router,
    private toastr: ToastrMsgService,
    private ngxLoader: NgxUiLoaderService,) {
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
      productName: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      billingPinCode: ['', [Validators.required]],
      billingFlatNo: ['', [Validators.required]],
      billingArea: ['', [Validators.required]],
      billingLandmark: ['', [Validators.required]],
      billingCity: ['', [Validators.required]],
      billingTown: ['', [Validators.required]],
      billingState: ['', [Validators.required]],
      shippingPinCode: ['', [Validators.required]],
      shippingFlatNo: ['', [Validators.required]],
      shippingArea: ['', [Validators.required]],
      shippingLandmark: ['', [Validators.required]],
      shippingCity: ['', [Validators.required]],
      shippingTown: ['', [Validators.required]],
      shippingState: ['', [Validators.required]],
      shippingAddressType: ['', [Validators.required]],
    });

    this.products = [
    ]
  }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe((params) => {
      this.orderId = parseInt(params.get('orderId'));
      this.getProductList()
      if (this.orderId && this.orderId != undefined) {
        this.editMode = true;
        this.title = 'Edit Order';
        this.getOrderById()
      } else {
        this.editMode = false;
        this.expand = true;
        this.title = 'Add New order';
      }
    });
  }

  getOrderById() {
    this.ordersService
      .getOrderDetailsBy(this.orderId)
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
          billingPinCode: res.Billing_Address.billingPinCode,
          billingFlatNo: res.Billing_Address.billingFlatNo,
          billingArea: res.Billing_Address.billingArea,
          billingLandmark: res.Billing_Address.billingLandmark,
          billingCity: res.Billing_Address.billingCity,
          billingTown: res.Billing_Address.billingTown,
          billingState: res.Billing_Address.billingState,
          shippingPinCode: res.Shipping_Address.shippingPinCode,
          shippingFlatNo: res.Shipping_Address.shippingFlatNo,
          shippingArea: res.Shipping_Address.shippingArea,
          shippingLandmark: res.Shipping_Address.shippingLandmark,
          shippingCity: res.Shipping_Address.shippingCity,
          shippingTown: res.Shipping_Address.shippingTown,
          shippingState: res.Shipping_Address.shippingState,
        });
      });
  }
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getProductList() {
    this.ProductService.getProductList().subscribe((res: any) => {
      if (res && res != undefined) {
        res.map(item => {
          this.ProductList.push(item.product_Detail)
        })
      }
      console.log(this.ProductList)
      this.ngxLoader.stop();
    })
  }

  closedModel() {
    
    let productName = this.ordersForm.controls['productName'].value
    let productDetails = this.ProductList.filter(item => item.name == productName)
    productDetails[0].Quantity = this.ordersForm.controls['quantity'].value
    this.products.push(productDetails[0])
    this.showdialog = false;
  }
}
