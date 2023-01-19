import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { InfluencerService } from '../../_services/influencer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Bundle } from 'src/app/_models/bundle';
@Component({
  selector: 'app-influencer-cost',
  templateUrl: './influencer-cost.component.html',
  styleUrls: ['./influencer-cost.component.scss']
})
export class InfluencerCostComponent implements OnInit {
  sidebarSpacing: any;
  categoryList: Bundle[] = []
  fgsType: any;
  payload:any;
  results: String[]=[];
  costForm:FormGroup
  constructor(private ngxLoader: NgxUiLoaderService,
    private InfluencerService: InfluencerService,
    private toastr: ToastrMsgService,
    private fb:FormBuilder,
  ) {
    this.costForm = this.fb.group({
      influencerName:['',Validators.required],
      minTotalReelCost:[0, Validators.required],
      maxTotalReelCost:[0, Validators.required],
      minTotalPostCost:[0, Validators.required],
      maxTotalPostCost:[0, Validators.required],
      minTotalStoryCost:[0, Validators.required],
      maxTotalStoryCost:[0, Validators.required],
      minTotalIgtvCost:[0, Validators.required],
      maxTotalIgtvCost:[0, Validators.required],
      minTotalSwipeUpCost:[0, Validators.required],
      maxTotalSwipeUpCost:[0, Validators.required],
      minTotalVideoCost:[0, Validators.required],
      maxTotalVideoCost:[0, Validators.required]
    })
   }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.getCategoryList()
  }

  search(event) {
    console.log(event.query)
    this.InfluencerService.getInfluencersResults(event.query).subscribe(data => {
      console.log(data)  
      let holder=[];
      data.map((res)=>{
        holder.push(res.username);
      })
      this.results = holder
    });
}
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getCategoryList() {
    this.InfluencerService.getInfluencerList().subscribe((res: any) => {
      console.log(res.result);
      this.categoryList = res.result
      console.log(this.categoryList)
      this.ngxLoader.stop();
    })
  }
  
  submitCostForm() {
    this.payload = {
      username:this.costForm.controls['influencerName'].value,
      minTotalReelCost:parseFloat(this.costForm.controls['minTotalReelCost'].value),
      maxTotalReelCost:parseFloat(this.costForm.controls['maxTotalReelCost'].value),
      minTotalPostCost:parseFloat(this.costForm.controls['minTotalPostCost'].value),
      maxTotalPostCost:parseFloat(this.costForm.controls['maxTotalPostCost'].value),
      minTotalStoryCost:parseFloat(this.costForm.controls['minTotalStoryCost'].value),
      maxTotalStoryCost:parseFloat(this.costForm.controls['maxTotalStoryCost'].value),
      minTotalIgtvCost:parseFloat(this.costForm.controls['minTotalIgtvCost'].value),
      maxTotalIgtvCost:parseFloat(this.costForm.controls['maxTotalIgtvCost'].value),
      minTotalSwipeUpCost:parseFloat(this.costForm.controls['minTotalSwipeUpCost'].value),
      maxTotalSwipeUpCost:parseFloat(this.costForm.controls['maxTotalSwipeUpCost'].value),
      minTotalVideoCost:parseFloat(this.costForm.controls['minTotalVideoCost'].value),
      maxTotalVideoCost:parseFloat(this.costForm.controls['maxTotalVideoCost'].value),
    }
    this.ngxLoader.start();
console.log(this.payload)
      this.InfluencerService.editInfluencerCost(this.payload).subscribe(res => {
        if (res) {
          this.toastr.showSuccess("Cost edited successfully", "Edited Cost")
          this.ngxLoader.stop();
        }
      })
  }
}
