export interface userStructure {
id: Number,
name: String,
email: String,
phone:String,
role: String,
status:Boolean
}

export interface queryStructure {
    queryid: Number,
    user: String,
    appliedDate: String,
    resolvedDate: String,
    status: String
}