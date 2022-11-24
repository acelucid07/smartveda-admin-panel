import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommonService {
constructor() {
}
    generateRandomNo(){
        var date = new Date()
        var StringValueOfDate = date.valueOf()
        // StringValueOfDate = StringValueOfDate.substring(0, 15)
        // StringValueOfDate = StringValueOfDate.replace(/-/g, '')
        return `ASNO/${StringValueOfDate}`
    }
    generateRandomeOrderId(){
        var date = new Date()
        var StringValueOfDate = date.valueOf()
        // StringValueOfDate = StringValueOfDate.substring(0, 10)
        // StringValueOfDate = StringValueOfDate.replace(/-/g, '')
        return `${StringValueOfDate}`  
    }

    getCurrentDate(){
        let TodayDate = new Date().toLocaleDateString()
        return `${TodayDate}`
    }
   
}