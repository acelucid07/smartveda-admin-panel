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
  name:string;
  cols:any[];
  followUpDetails:followUpStructure[]=[]
  constructor(private leadService:LeadService,
    private ActivatedRoute:ActivatedRoute) {
      this.ActivatedRoute.queryParamMap.subscribe((params)=>{
        this.name=params.get('leadName')
            })
    this.getFollowUpDetails(this.name)
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

  getFollowUpDetails(leadId:string){
    this.leadService.getFollowUpDetails(this.name).subscribe((res)=>{
      
      this.followUpDetails = res.filter((val)=>{
        return val.clientName==this.name
      })
      console.log(res)
      console.log(this.followUpDetails)
    })

  }
  //Search functionality start here
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
