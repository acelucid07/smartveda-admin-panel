export interface CATEGORY {
    id: number,
    name: string,
    image: string,
    hyperlink: string,
    position: string,
}

export interface SUB_CATEGORY {
    id: number,
    name: string,
    image: string,
    hyperlink: string,
    position: string,
    parent_id:string,
    parent_name:string
}
export interface SPONSOR {
    id: number,
    name: string,
    email: string,
    phone_No: string,
    funding: string,
    Address: ADDRESS,
}

export interface ADDRESS {
    cityName: string,
    street: string,
    landmark: string,
    state: string,
    zip_code: number,
    country: string
}