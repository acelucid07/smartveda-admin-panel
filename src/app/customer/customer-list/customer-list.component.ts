import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { UsersService } from 'src/app/_services/users.service';
import { UserGetRequestParams } from 'src/app/_models/user';
import * as fileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as moment from 'moment';
import { ProfileService } from 'src/app/_services/profile.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import {TABLE_HEADING} from '../../_models/table_heading';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  fgsType: any;
  customerData!: any;
  users!: UserGetRequestParams[];
  userDetails!: any;
  exportColumns!: any[];
  cols!: TABLE_HEADING[];
  selectedcustomerData!: UserGetRequestParams[];

  constructor(
    private userService: UsersService,
    private ngxLoader: NgxUiLoaderService,
    private profileService: ProfileService,
    private toastr: ToastrMsgService
  ) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.getCustomerList();

    this.cols = [
      { field: 'email',show:true, headers: 'Email' },
      { field: 'phone', show:true,headers: 'Phone' },
      { field: 'role',show:true, headers: 'Role' },
      { field: 'status',show:true, headers: 'Status' },
      { field: 'createdAt',show:true, headers: 'Created At' }
    ]
    this.exportColumns = this.cols.map(col => (
      { title: col.headers, dataKey: col.field }
    ));
  }

  onDeleteCustomer(data: UserGetRequestParams) {
    this.profileService.deleteCustomerProfile(data).subscribe((res: UserGetRequestParams) => {
      console.log(res),
        this.toastr.showSuccess('User Deleted Successfully', 'User delete');
      this.getCustomerList();
      (error: any) => {
        this.toastr.showError('Error Deleting User', 'error');
      }
    })
  }

  downloadResource() {
    this.userService.downloadFile().subscribe((response: BlobPart) => {
      let data: any = new Blob([response], { type: 'text/json; charset=utf-8' });
      const downloadLink = window.URL.createObjectURL(data);
      console.log(downloadLink)
      fileSaver.saveAs(data, `customerList.csv`)
    })
  }

  exportPdf() {
    const doc = new jsPDF.jsPDF('p', 'pt');
    autoTable(doc, {
      columns: this.exportColumns,
      body: this.customerData,
      didDrawPage: (dataArg) => {
        doc.text('Customer List', dataArg.settings.margin.left, 10);
      }
    });
    doc.save('customerList.pdf')
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.customerData);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "customerList");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      fileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      )
    })
  }

  getCustomerList() {
    this.userService.getUsers().subscribe((res: any) => {
      this.customerData = res.data;
      this.customerData.map((item: UserGetRequestParams) => {
        item.createdAt = moment(item.createdAt).format('MMM DD, YYYY')
      })
      this.ngxLoader.stop();
    });
  }

  showSuccess() {
    this.toastr.showSuccess('Status Updated Successfully', 'Status');
  }

  showError() {
    this.toastr.showError('Status Not updated', 'Status');
  }

  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}