import {product_details} from '../_models/catalog'
export interface order {
  orderId: number,
  customerId: string,
  orderDate: string,
  orderNo: string,
  paymentStatus: string,
  deliveryType: string,
  paymentType: string,
  total:string,
  deliveryStatus:string,
  country:string,
  orderStatus:string,
  email:string,
  mobileNo:string,
}

export interface cancelOrder {
  cancelTransId: number,
  orderId: number,
  total: string,
  refundInitiated: boolean,
  productId: Array<number>,
  deliveryCharge: string
}

export interface orderTransactin{
  transactionId:string,
  orderId:number,
  productId:Array<Number>,
  discount:string,
  deliveryCharge:string,
  productTotal:string,
  tax:string,
  totalAmountWith:string,
  methodOfPayment:string 
}

export interface Billing_Address {
  billingPinCode: string | number,
  billingFlatNo: string | number,
  billingHouseNo: string | number,
  billingBuildingName: string,
  billingApartmentName: string,
  billingArea: string,
  billingStreetName: string,
  billingSectorName: string
  billingVillageName: string
  billingLandmark: string
  billingCity: string
  billingTown: string
}

export interface Shipping_Address{
  shippingPinCode: string | number,
  shippingFlatNo: string | number,
  shippingHouseNo: string | number,
  shippingBuildingName: string,
  shippingApartmentName: string,
  shippingArea: string,
  shippingStreetName: string,
  shippingSectorName: string
  shippingVillageName: string
  shippingLandmark: string
  shippingCity: string
  shippingTown: string
}

export interface Shipments {
  shipmentId: string | number
  OrderDetails: order,
  Totalquantity: string | number
  ShipmentDate: string,
  Shippingto: string,
  ProductDetails:any,
  Billing_Address:Billing_Address,
  Shipping_Address:Shipping_Address,
  PaymentInformation:orderTransactin,
}