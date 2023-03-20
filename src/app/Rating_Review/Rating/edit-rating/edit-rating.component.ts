import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ratingStructure } from 'src/app/_models/rating';
import { RatingService } from 'src/app/_services/rating.service';
import { ExportDialogComponent } from '../export-dialog/export-dialog.component';

@Component({
  selector: 'app-edit-rating',
  templateUrl: './edit-rating.component.html',
  styleUrls: ['./edit-rating.component.scss']
})
export class EditRatingComponent implements OnInit {
  
//  get cleaniness() : boolean {
//   if(this.ratingData[0].ratingType.Cleaniness)
//     return true
//     else return false
//   }
//   get comfort() : boolean {
//     if(this.ratingData[0].ratingType.Comfort)
//       return true
//       else return false
//     }
//     get facilities() : boolean {
//       if(this.ratingData[0].ratingType.Facilities)
//         return true
//         else return false
//       }
//       get location() : boolean {
//         if(this.ratingData[0].ratingType.Location)
//           return true
//           else return false
//         }
//         get staff() : boolean {
//           if(this.ratingData[0].ratingType.Staff)
//             return true
//             else return false
//           }
  
  sidebarSpacing:string = 'contracted';
  ratingData:ratingStructure[]=[];
  ratingForm:FormGroup;
  name:string;
  // detailForm:FormGroup
  reviewerOptions:string[]=[];
  reviewOptions:string[]=['Hotel Plaza','Palm Hotel','Prince Hotel'];
  statusOptions:string[]=['Approved','Not Approved'];
  userTypeOptions:string[]=['Business Trip','Couple','Family','Group']
  constructor(private fb:FormBuilder,private ratingService:RatingService,
    public dialog: MatDialog,
    private ActivatedRoute:ActivatedRoute,
    private route:Router) {
    
    // this.detailForm = this.fb.group({
    //   date:['25-02-2022 14:56pm'],
    //   ipAddress:[ '13.126.212.31']
    // })
      this.ratingForm = this.fb.group({
        date:['25-02-2022 14:56pm'],
        ipAddress:[ '13.126.212.31'],
      reviewer: ['', [Validators.required]],
      review: ['', [Validators.required]],
      overall: ['', [Validators.required]],
      pros: [''],
      cons: [''],
      ratingType:this.fb.group({
        Cleaniness:[0],
        Comfort:[0],
        Facilities:[0],
        Location:[0],
        Staff:[0],
      }),
      userType: [''],
      status: ['', [Validators.required]]
    })
    this.ratingService.getReviewerList().subscribe((res)=>{
      this.reviewerOptions=res
    })
    this.ActivatedRoute.queryParamMap.subscribe((params)=>{
      this.name=params.get('reviewerName')
          })
   
   }

  ngOnInit(): void {
    this.getRatingDetails()
  }

  getRatingDetails()
  {
    this.ratingService.getRatingDetails(this.name).subscribe((res) => {
      this.ratingData = res
      console.log(this.ratingData[0].ratingType)
      this.ratingForm.patchValue({
        reviewer: this.ratingData[0].reviewer,
        review: this.ratingData[0].review,
        overall: this.ratingData[0].rating,
        pros: this.ratingData[0].positives,
        cons: this.ratingData[0].negatives,
        userType:this.ratingData[0].userType,
        status: this.ratingData[0].status
      })
      this.ratingData[0].ratingType
      this.ratingForm.controls["ratingType"].patchValue(this.ratingData[0].ratingType)
    })
  }
  onToggleSidebar(sidebarState: any) {
  if (sidebarState === 'open') {
    this.sidebarSpacing = 'contracted';
  } else {
    this.sidebarSpacing = 'expanded';
  }

}

openExportDialog(){
  const dialogRef = this.dialog.open(ExportDialogComponent);
  dialogRef.afterClosed().subscribe(result => {
    if (result == true) {
    this.ratingService.getReviewerList().subscribe((res)=>{
      console.log(res)
      this.reviewerOptions = res;
    })
    }
  });
}

submitForm(){
  let payload={
    reviewer:this.ratingForm.controls["reviewer"].value,
    review:this.ratingForm.controls["review"].value,
    rating:this.ratingForm.controls["overall"].value,
    status:this.ratingForm.controls["status"].value,
    ratingType:this.ratingForm.controls["ratingType"].value,
    positives:this.ratingForm.controls["pros"].value,
    negatives:this.ratingForm.controls["cons"].value,
    userType:this.ratingForm.controls["userType"].value
  }
  console.log(payload)
  this.ratingService.submitRatingEditData(payload,this.name).subscribe((res)=>{
    if(res)
    {
      this.route.navigate(['/rating/ratinglist'])
    }
  })

}


show(data:any){
  console.log(data)
}
}
