import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import * as xlsxPackage from 'xlsx';
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import { ReviewsService } from 'src/app/_services/reviews.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ModulePermissionService } from 'src/app/_services/module-permission.service';
import { access } from 'src/app/_models/modulepermission';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  sidebarSpacing:string='contracted'
  @ViewChild('dt') dt:Table|any
  cols:any[]
  reviewListValue:any[]
  reviewDetails:any[]
  exportColumns:any[]
  statusList:string[]=['Active','Inactive']
  accessPermission:access
  constructor(private reviewsService:ReviewsService,
    public dialog:MatDialog,private permissionService:ModulePermissionService) {
      this.permissionService.getModulePermission().subscribe(res=>{ 
        this.accessPermission=res[0].RatingList
        console.log( this.accessPermission)
        this.getReviewList()
      })
    }
   

  ngOnInit(): void {
    this.cols = [{ field: "reviewSubject", headers: "Review Subject" },
    { field: "publishingsiteurl", headers: "Publishing Site Url" },
    { field: "rating", headers: "Rating" },
    { field: "status", headers: "Status" }]
    this.exportColumns = this.cols.map(col => ({title: col.headers,dataKey: col.field}))
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
getReviewList(){
  this.reviewsService.getReviewList().subscribe((res)=>{
    this.reviewListValue=res
  })
}

exportExcel() {
  const worksheet = xlsxPackage.utils.json_to_sheet(this.reviewListValue);
  const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = xlsxPackage.write(workbook, { bookType: 'xlsx', type: 'array' });
  this.saveAsExcelFile(excelBuffer, "reviews");
}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
    type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}

exportPdf() {
  this.reviewDetails = this.reviewListValue
          const doc = new jsPDF.jsPDF('l', 'pt');
         autoTable(doc, {
          columns:this.exportColumns,
          body:this.reviewDetails
         });
          doc.save('reviews.pdf');
      }

      openDialog(name: any) {
        const dialogRef = this.dialog.open(DialogComponent);
        dialogRef.afterClosed().subscribe(result => {
          if (result == true) {
            this.deleteReviewDetails(name)
          }
        });
      }

      deleteReviewDetails(name:string) {
        console.log(name)
        // this.ngxLoader.start();
        this.reviewsService.deleteReviewDetails(name).subscribe(res => {
          if (res) {
            // this.toastr.showSuccess("lead deleted successfully", "lead deleted")
            this.getReviewList();
          }
        })
      }
//search functionality
  applyGlobalFilter(inputData, matchMode){
    this.dt.filterGlobal(inputData,matchMode)
  }
}
