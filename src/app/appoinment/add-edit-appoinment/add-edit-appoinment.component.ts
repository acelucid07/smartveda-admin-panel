import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppoinmentService } from 'src/app/_services/appoinment';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { APPOINTMENT } from 'src/app/_models/appointment';
import { CommonService } from 'src/app/_services/common';
@Component({
  selector: 'app-add-edit-appoinment',
  templateUrl: './add-edit-appoinment.component.html',
  styleUrls: ['./add-edit-appoinment.component.scss']
})
export class AddEditAppoinmentComponent implements OnInit {
  appoinmentForm: FormGroup
  fgsType: any;
  sidebarSpacing: any;
  id: any
  title: string = " "
  editMode: boolean = false
  payload: APPOINTMENT;
  constructor(private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService,
    private AppoinmentService: AppoinmentService,
    private commonService: CommonService
    ) {
    this.appoinmentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      appointmentDate: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id && this.id != undefined) {
        this.editMode = true
        this.title = "Edit Category"
        this.getAppoinmentById()
      } else {
        this.editMode = false
        this.title = "Add New Category"
      }
    });
  }
  getAppoinmentById() {
    this.AppoinmentService.getAppointmentById(this.id).subscribe((res: any) => {
      this.appoinmentForm.patchValue({
        name: res?.name,
        email: res?.email,
        phone: res?.phone,
        appointmentDate: res?.appointmentDate,
        // startTime: this.commonService.convertTime(res?.startTime),
        startTime: res?.startTime,
        endTime: res?.endTime
      })
      this.ngxLoader.stop();
    })
  }
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  addAppointment(addAppointmentData: APPOINTMENT) {
    this.AppoinmentService.addAppointment(addAppointmentData).subscribe(res => {
      if(res){
        this.toastr.showSuccess("Appointment added successfully", "Appointment Added")
        this.ngxLoader.stop()
        this.route.navigate(['/appointment'])
      } else {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }

  editAppointment(editData: APPOINTMENT) {
    this.AppoinmentService.editAppointment(editData, this.id).subscribe(res => {
      if(res){
        this.toastr.showSuccess("Appointment added successfully", "Appointment Added")
        this.ngxLoader.stop()
        this.route.navigate(['/appointment'])
      } else {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }

  submit() {
    this.payload = {
      _id: parseInt(this.id),
      name: this.appoinmentForm?.controls['name'].value,
      email: this.appoinmentForm?.controls['email'].value,
      phone: this.appoinmentForm?.controls['phone'].value,
      appointmentDate: this.appoinmentForm?.controls['appointmentDate'].value,
      startTime: this.appoinmentForm?.controls['startTime'].value,
      endTime: this.appoinmentForm?.controls['endTime'].value
    }
    this.ngxLoader.start();
    if(this.editMode){
      this.editAppointment(this.payload)
    } else {
      this.addAppointment(this.payload)
    }
  }
}
