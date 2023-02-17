import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-create',
  templateUrl: './lead-create.component.html',
  styleUrls: ['./lead-create.component.scss']
})
export class LeadCreateComponent implements OnInit {
  sidebarSpacing:string;
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
  }

}
