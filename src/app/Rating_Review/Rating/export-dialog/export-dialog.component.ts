import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RatingService } from 'src/app/_services/rating.service';

@Component({
  selector: 'app-export-dialog',
  templateUrl: './export-dialog.component.html',
  styleUrls: ['./export-dialog.component.scss']
})
export class ExportDialogComponent implements OnInit {
// formats:string[];
// timePeriod:string[];
  reviewerForm:FormGroup;
  constructor(private fb:FormBuilder,private ratingService:RatingService,private route:Router) { 
    this.reviewerForm=this.fb.group({
    reviewerName:['',[Validators.required]],
    reviewerEmail:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    // this.formats=['Excel','CSV','PDF']
    // this.timePeriod=['today','yesterday','this week','this month','last month']
    
  }

  submitForm(){
    let payload={
      name:this.reviewerForm.controls['reviewerName'].value,
      email:this.reviewerForm.controls['reviewerEmail'].value
    }
    
    this.ratingService.submitReviewerData(payload)
//       if(res)
//       {
// this. route
//       }

  }

}
