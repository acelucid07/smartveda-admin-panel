import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewerService } from 'src/app/_services/reviewer.service';

@Component({
  selector: 'app-add-edit-reviewer',
  templateUrl: './add-edit-reviewer.component.html',
  styleUrls: ['./add-edit-reviewer.component.scss']
})
export class AddEditReviewerComponent implements OnInit {
sidebarSpacing:string='contracted';
statusList:string[]=['Active','Inactive']
title:string;
id:number;
reviewerForm:FormGroup
constructor(private reviewerService:ReviewerService,
  private fb:FormBuilder,
  private route:Router,
  private activatedRoute:ActivatedRoute) { 
  
  this.reviewerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    reviewerStatus: ['', [Validators.required]],
  });

  this.activatedRoute.queryParamMap.subscribe((params)=>{
    this.id = parseInt(params.get('serialno'))
    if (this.id && this.id != undefined) {
      this.title = "Edit"
      this.getReviewerDetail();
    } else {
      this.title = "Add"
    }
  })

}

ngOnInit(): void {
}

getReviewerDetail(){
this.reviewerService.getReviewerDetails(this.id).subscribe((res)=>{
this.reviewerForm.patchValue({
  name:res[0].name,
  email:res[0].email,
  reviewerStatus:res[0].status
})
})
}
submit()
{
  let payload={
    name:this.reviewerForm.controls['name'].value,
    email:this.reviewerForm.controls['email'].value,
    status:this.reviewerForm.controls['reviewerStatus'].value
  }
  this.id?this.submitEditedDetails(payload):this.submitDetails(payload)
}

submitEditedDetails(recievedValue:any){
let newPayload= Object.assign({},recievedValue)
this.reviewerService.submitEditedDetails(newPayload,this.id).subscribe((res)=>{
 if(res)
  this.route.navigate(['/reviewer/reviewerlist'])
})
}

submitDetails(recievedValue:any){
  let newPayload= Object.assign({},recievedValue)
  this.reviewerService.submitReviewerDetail(newPayload).subscribe((res)=>{
    if(res)
     this.route.navigate(['/reviewer/reviewerlist'])
   })
}


onToggleSidebar(sidebarState: any){
  if (sidebarState === 'open') {
    this.sidebarSpacing = 'contracted';
  } else {
    this.sidebarSpacing = 'expanded';
  }
}

}
