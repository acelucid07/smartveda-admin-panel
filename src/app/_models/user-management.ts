export interface userStructure {
id: Number,
name: String,
email: String,
phone:String,
role: String,
status:Boolean
}

export interface queryStructure {
    queryid: number,
    user: String,
    appliedDate: String,
    resolvedDate: String,
    status: string,
    requestorName: String,
    requestorEmail:String,
    content: String
}
// export interface queryContentStructure {
//     queryid: Number,
    
// }