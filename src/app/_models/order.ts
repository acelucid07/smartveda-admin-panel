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
  email:string,
  mobileNo:string,
  billingCityName:string,
  billingBuildingName:string,
  billingBlockName:string,
  billingFloorNo:string,
  billingUnit:string,
  billingPostalCode:string,
  billingStreetName:string,
  shippingPostalCode:string,
  shippingCityName:string,
  shippingBuildingName:string,
  shippingBlockName:string,
  shippingFloorNo:string,
  shippingunit:string,
  shippingStreetName:string
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