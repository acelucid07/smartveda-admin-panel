export interface leadStructure {
    id:number,
    name:string,
    email:string,
    createdBy:string,
    technology: string,
    source: string,
    startDate: string | Date,
    followUpDate: string| Date,
    budget: string,
    status: string,
    deal:string
}
export interface leadExtraDetailsStructure {
  
    name:string,
    email:string,
    contactNumber:string,
    createdBy:string,
    commentGiven:string,
    technology: string,
    source: string,
    followUpDate: string| Date,
    budget: string,
    pinCode:string,
    stateName:string,
    cityName:string,
    countryName:{text:string, value:string},
}

export interface followUpStructure {
        clientName: string,
        currentDate: string,
        nextFollowUpDate: string,
        comment:string,
        status: string,
        deal: string,
}