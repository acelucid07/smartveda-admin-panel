import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { followUpStructure } from 'src/app/_models/leads';
import { LeadService } from 'src/app/_services/leads.service';

@Component({
  selector: 'app-lead-view',
  templateUrl: './lead-view.component.html',
  styleUrls: ['./lead-view.component.scss']
})
export class LeadViewComponent implements OnInit {
  sidebarSpacing:string='contracted';
  @ViewChild('dt') dt: Table|undefined;
  id:string;
  cols:any[];
  followUpDetails:followUpStructure[]=[]
  constructor(private leadService:LeadService,
    private ActivatedRoute:ActivatedRoute) {
      this.ActivatedRoute.queryParamMap.subscribe((params)=>{
        this.id=params.get('leadid')
            })
    this.getFollowUpDetails(this.id)
   }
  
  
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  
  ngOnInit(): void {
  //   this.cols = [
      
  //     { field: 'clientName', show: true, headers: 'Name' },
  //     { field: 'followUpDetails', show: true, headers: 'Email' },
  //     { field: 'createdBy', show: true, headers: 'Created By' },
  //     { field: 'technology', show: true, headers: 'Technology' },
  //     { field: 'source', show: true, headers: 'Lead Source'},
  //     { field: 'startDate', show: true, headers: 'Start Date'},
  //     { field: 'followUpDate', show: true, headers: 'Follow-Up Date'},
  //     { field: 'budget', show: true, headers: 'Budget'},
  //     { field: 'status', show: true, headers: 'Status'},
  //     { field: 'deal', show: true, headers: 'Deal'}
  //   ]
  }

  getFollowUpDetails(leadId:string){
    this.leadService.getFollowUpDetails(this.id).subscribe((res)=>{
      this.followUpDetails = res;
      console.log(this.followUpDetails)
    })

  }
  //Search functionality start here
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
