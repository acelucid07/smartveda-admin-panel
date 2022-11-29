export interface CouponCode {
    id: number;
    Country: string,
    Title: string,
    Code: string,
    couponType: string,
    CustomerId: string | number,
    startDate: string,
    endDate: string,
    quotaPerUser: string | number,
    firstTimeUser: boolean,
    status:boolean,
    maxDiscountAmount: string | number,
    miniBillAmount: string | number,
    discount: string | number,
    date: string,
    description: string,
}