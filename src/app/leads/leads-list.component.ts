import { Component, OnInit, ViewChild} from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-leads',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {
  sidebarSpacing:string;
  @ViewChild('dt') dt: Table|undefined;
  cols: any[];
  
  constructor() {
    this.sidebarSpacing = 'contracted';
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
      { field: 'newFollowUpDate', show: true, headers: 'Follow-Up Date'},
      { field: 'status', show: true, headers: 'Status'},
      { field: 'deal', show: true, headers: 'Deal'},
      { field: 'budget', show: true, headers: 'Budget'}
    ]
  }

   //Search functionality start here
   applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
