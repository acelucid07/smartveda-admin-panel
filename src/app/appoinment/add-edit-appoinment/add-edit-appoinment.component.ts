import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppoinmentService } from 'src/app/_services/appoinment';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
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
  constructor(private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService,
    private AppoinmentService: AppoinmentService) {
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
    this.AppoinmentService.getAppoinmentById(this.id).subscribe((res: any) => {
      this.appoinmentForm.patchValue({
        name: res.name,
        email: res.email,
        phone: res.phone,
        appointmentDate: res.appointmentDate,
        startTime: res.startTime,
        endTime: res.endTime
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
}
