export interface CATEGORY {
    id: number,
    name: string,
    image: File|any,
    hyperlink: string,
    position: string,
}

export interface SUB_CATEGORY {
    id: number,
    name: string,
    image: string,
    hyperlink: string,
   parent_category:PARENT_CATEGORY,
}
export interface PARENT_CATEGORY {
    id:string,
    name:string
}
export interface SPONSOR {
    id: number,
    name: string,
    email: string,
    phone: string,
    funding: string,
    address: ADDRESS,
}

export interface ADDRESS {
    city: string,
    street: string,
    landmark: string,
    state: string,
    zip: number,
    country: string
}