export interface Influencer {
    id: number,
    full_name: string,
    username:string
    influencercount: number
}

export interface csvFileStructure {
    username:string,
    minTotalReelCost:number,
    maxTotalReelCost:number,
    minTotalPostCost:number,
    maxTotalPostCost:number,
    minTotalStoryCost:number,
    maxTotalStoryCost:number,
    minTotalIgtvCost:number,
    maxTotalIgtvCost:number,
    minTotalSwipeUpCost:number,
    maxTotalSwipeUpCost:number,
    minTotalVideoCost:number,
    maxTotalVideoCost:number
}

export interface csvFileStructureDetails {
    Handle_name:String,
    Handle_link:String,
    Category:String,
    City:String,
    Country:String,
    Gender:String,
    Contact_no:number,
    Email_id:String,
    Date_of_birth:String
}