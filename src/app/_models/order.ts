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
  product_details:any,
  email:string,
  mobileNo:string,
  Shipping_Address:Shipping_Address,
  Billing_Address:Billing_Address,
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
  billingArea: string,
  billingLandmark: string
  billingCity: string
  billingTown: string
  billingState: string
}

export interface Shipping_Address{
  shippingPinCode: string | number,
  shippingFlatNo: string | number,
  shippingArea: string,
  shippingLandmark: string
  shippingCity: string
  shippingTown: string
  shippingState: string
  shippingAddressType: string
}

export interface Shipments {
  shipmentId: string | number
  OrderDetails: any,
  Totalquantity: string | number
  ShipmentDate: string,
  Shippingto: string,
  ProductDetails:any,
  Billing_Address:Billing_Address,
  Shipping_Address:Shipping_Address,
  PaymentInformation:orderTransactin,
}