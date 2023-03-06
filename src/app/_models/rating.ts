export interface ratingStructure {
   review:string;
   reviewer:string;
   rating:string;
   status:string;
   date:string | Date;
   ratingType?:{
    Cleaniness:number,
    Comfort:number,
    Facilities:number,
    Location:number,
    Staff:number
},
      positives?:string,
      negatives?:string,
      userType?:string
}

export interface reviewerStructure{
    name:string;
    email:string;
}