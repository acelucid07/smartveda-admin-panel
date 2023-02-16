import { Component, OnInit, ViewChild} from '@angular/core';
import { Table } from 'primeng/table';
import { LeadService } from '../../_services/leads.service'
import { leadStructure } from '../../_models/leads';
import * as FileSaver from 'file-saver';
import * as xlsxPackage from 'xlsx'
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-leads',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})

export class LeadsListComponent implements OnInit {
  sidebarSpacing:string;
  @ViewChild('dt') dt: Table|undefined;
  cols: any[];
  deals: any[];
  technologies: any[];
  sources: any[];
  exportColumns: any[];
  leadlist:leadStructure[]=[]
  leadDetails:any[];
  
  constructor(private leadService:LeadService) {
    this.sidebarSpacing = 'contracted';
    this.getleadsdetails();
   }
 
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  
  ngOnInit(): void {
    this.cols = [
      { field: 'id', show: true, headers: 'Id' },
      { field: 'name', show: true, headers: 'Name' },
      { field: 'email', show: true, headers: 'Email' },
      { field: 'createdBy', show: true, headers: 'Created By' },
      { field: 'technology', show: true, headers: 'Technology' },
      { field: 'source', show: true, headers: 'Lead Source'},
      { field: 'startDate', show: true, headers: 'Start Date'},
      { field: 'followUpDate', show: true, headers: 'Follow-Up Date'},
      { field: 'budget', show: true, headers: 'Budget'},
      { field: 'status', show: true, headers: 'Status'},
      { field: 'deal', show: true, headers: 'Deal'}
    ]
    this.exportColumns = this.cols.map(col => ({title: col.headers,dataKey: col.field}))
    this.sources = [ 'Site' , 'Linked In' , 'Newspaper','Other']
    this.deals = ['Hot','Cold','Not Interested','Dead']
    this.technologies = ['React','Angular','.Net','Node','React Native']
    console.log(this.exportColumns)
  }

  getleadsdetails() {
    this.leadService.getLeadsList().subscribe((res) => {
      this.leadlist = res;
      this.leadlist.forEach(
        (lead) => {lead.startDate = new Date(lead.startDate)
          lead.followUpDate = new Date(lead.followUpDate)}
      );
    })
  }
  show(data:any){
    console.log(data)
  }

  exportExcel() {
    const worksheet = xlsxPackage.utils.json_to_sheet(this.leadlist);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = xlsxPackage.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, "leads");
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
    this.leadDetails = this.leadlist
            const doc = new jsPDF.jsPDF('l', 'pt');
           autoTable(doc, {
            columns:this.exportColumns,
            body:this.leadDetails
           });
            doc.save('products.pdf');
        }

   //Search functionality start here
   applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
