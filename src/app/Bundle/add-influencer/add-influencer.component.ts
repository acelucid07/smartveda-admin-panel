import { Component, OnInit, ViewChild } from '@angular/core';
// import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
// import { Table } from 'primeng/table';
@Component({
  selector: 'app-add-influencer',
  templateUrl: './add-influencer.component.html',
  styleUrls: ['./add-influencer.component.scss']
})
export class AddInfluencerComponent implements OnInit {
    sidebarSpacing:String;
    constructor() { }
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