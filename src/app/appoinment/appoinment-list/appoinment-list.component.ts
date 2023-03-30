import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { AppoinmentService } from 'src/app/_services/appoinment';
import { APPOINTMENT } from '../../_models/appointment';
import { Table } from 'primeng/table';
import { ModulePermissionService } from 'src/app/_services/module-permission.service';
import { access } from 'src/app/_models/modulepermission';
@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.scss']
})
export class AppoinmentListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  appoinmentList: APPOINTMENT[] = []
  fgsType: any;
  accessPermission:access
  constructor(private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,
    private AppoinmentService: AppoinmentService,
    private permissionService:ModulePermissionService) {
      this.permissionService.getModulePermission().subscribe(res=>{ 
        this.accessPermission=res[0].AppointmentList
        // console.log( this.accessPermission)
      })
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader,
      this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: '_id', show: true, headers: 'Id' },
      { field: 'name', show: true, headers: 'Name' },
      { field: 'email', show: true, headers: 'Email' },
      { field: 'phone', show: true, headers: 'Phone' },
      { field: 'appointmentDate', show: true, headers: 'Appointment Date' },
      { field: 'startTime', show: true, headers: 'Start At' },
      { field: 'endTime', show: true, headers: ' End At' },
    ]
    this.getAppoinmentList()
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getAppoinmentList() {
    this.AppoinmentService.getAppointmentList().subscribe(res => {
      this.appoinmentList = res
      this.ngxLoader.stop();
    })
  }
  deleteAppoinmentById(id) {
    this.AppoinmentService.deleteAppointmentById(id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("order deleted successfully", "order delete")
        this.getAppoinmentList()
      }
    })
  }
  //search functionality starts here
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
