import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Table } from 'primeng/table';
import { ratingStructure } from 'src/app/_models/rating'; 
import { RatingService } from 'src/app/_services/rating.service';
import { ExportDialogComponent } from '../export-dialog/export-dialog.component';
import * as xlsxPackage from 'xlsx';
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import { DialogComponent } from '../dialog/dialog.component';
import { ModulePermissionService } from 'src/app/_services/module-permission.service';
import { access } from 'src/app/_models/modulepermission';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss'],
})
export class RatingListComponent implements OnInit {
  ratingData:ratingStructure[]=[];
  ratingDetails:any[];
  sidebarSpacing:string ;
  cols:Table|any;
  statusList:string[];
  exportColumns:any[];
  accessPermission:access
  @ViewChild('dt') dt:Table|undefined

  constructor(private ratingService:RatingService, public dialog: MatDialog, 
    private permissionService:ModulePermissionService) {
    this.permissionService.getModulePermission().subscribe(res=>{ 
      this.accessPermission=res[0].ReviewList
      console.log( this.accessPermission)
    })
  }

  ngOnInit(): void {
    this.statusList=['Approved','Not Approved']
    this.sidebarSpacing = 'contracted';
    
    this.cols=[{field:"rating", headers:"Rating"},
    {field:"review", headers:"Review Subject"},
    {field:"reviewer", headers:"Reviewer"},
    {field:"status", headers:"Status"},
    {field:"date", headers:"Date"}]
    this.exportColumns = this.cols.map(col => ({title: col.headers,dataKey: col.field}))
    this.getRatingDetails()
  }

  // openExportDialog(){
  //     const dialogRef = this.dialog.open(ExportDialogComponent);
  //     dialogRef.afterClosed().subscribe(result => {
  //       if (result == true) {
  //       }
  //     });
  // }

  getRatingDetails()
  {
    this.ratingService.getRatingList().subscribe((res) => {
      this.ratingData = res
      this.ratingData.forEach(
        (val) => {
         val.date = new Date(val.date)
        }
      );
    })
  }
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  exportExcel() {
    const worksheet = xlsxPackage.utils.json_to_sheet(this.ratingData);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = xlsxPackage.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, "ratings");
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
    this.ratingDetails = this.ratingData
            const doc = new jsPDF.jsPDF('l', 'pt');
           autoTable(doc, {
            columns:this.exportColumns,
            body:this.ratingDetails
           });
            doc.save('ratings.pdf');
        }

        openDialog(name: any) {
          const dialogRef = this.dialog.open(DialogComponent);
          dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
              this.deleteRatingDetails(name)
            }
          });
        }

        deleteRatingDetails(name:string) {
          console.log(name)
          // this.ngxLoader.start();
          this.ratingService.deleteRatingDetails(name).subscribe(res => {
            if (res) {
              // this.toastr.showSuccess("lead deleted successfully", "lead deleted")
              this.getRatingDetails();
            }
          })
        }
    // search functionality start here
    applyFilterGlobal(data, stringVal) {
      this.dt.filterGlobal(data, stringVal);
    }

}
