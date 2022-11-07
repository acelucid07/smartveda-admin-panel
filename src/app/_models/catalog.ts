export interface product {
  id: number
  Product_Region: product_region,
  product_Detail: product_details,
  brand: brands,
  description: Description,
  price: prices,
  images: string,
  videos: string,
  seo: SEO
}
export interface product_region {
  country: string,
  language: string,
}
export interface product_details {
  name: string,
  sku: string,
  status: Boolean,
  category: string,
  new: boolean,
  featured: boolean,
  visible_individually: boolean,
  Quantity: number
}
export interface brands {
  brands: string,
  country_origin: string
}
export interface Description {
  short_description: string,
  description: string
}
export interface prices {
  price: number,
  cost: number,
  special_price: number,
  special_price_from: string,
  special_price_to: string
}
export interface SEO {
  meta_title: string,
  meta_description: string,
  meta_keywords: string
}
export interface category {
  id: number,
  categoryName: string,
  image: string,
  description: string,
  status: Boolean,
  parent_category: parent_category,
  meta_description: SEO
}
export interface parent_category {
  id: number,
  name: string
}
export let Satatus = [
  { name: 'true', code: 1 },
  { name: 'false', code: 0 },

]


