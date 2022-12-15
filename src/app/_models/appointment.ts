import { Time } from "@angular/common";

export interface APPOINTMENT {
    _id: number | string
    name: string,
    email: string,
    phone: string,
    appointmentDate: Date | string,
    startTime: string | Time,
    endTime: string | Time,
}