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

export interface followUpStructure {
        id: number,
        clientName: string,
        currentDate: string,
        nextFollowUpDate: string,
        comment:string,
        status: string,
        deal: string,
}