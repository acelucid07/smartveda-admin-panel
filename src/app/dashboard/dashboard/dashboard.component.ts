import { Component, OnInit } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sidebarSpacing: any;
  faMoneyBill = faMoneyBill;
  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

}
