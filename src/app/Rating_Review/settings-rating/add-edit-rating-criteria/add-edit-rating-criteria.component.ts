import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  RatingCriteriaService } from 'src/app/_services/rating-criteria.service'

@Component({
  selector: 'app-add-edit-rating-criteria',
  templateUrl: './add-edit-rating-criteria.component.html',
  styleUrls: ['./add-edit-rating-criteria.component.scss'],
})
export class AddEditRatingCriteriaComponent implements OnInit {
  sidebarSpacing: string = 'contracted';
  criteriaForm: FormGroup;
  title:string;
  id:number;
  constructor(
    private ratingCriteriaService: RatingCriteriaService,
    private fb: FormBuilder,
    private route: Router,
    private activatedRoute:ActivatedRoute) {
      this.criteriaForm = fb.group({
        name: ['', [Validators.required]],
        status: ['', [Validators.required]],
      });
      
      this.activatedRoute.queryParamMap.subscribe((params)=>{
      this.id = parseInt(params.get('serialno'))
      if(this.id)
      {
        this.title = 'Edit';
        this.getRatingCriteriaDetail()
      }
      else{
        this.title = "Add";
      }
    })
   
  }
  statusList: string[] = ['Active', 'Inactive'];
  ngOnInit(): void {}

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  getRatingCriteriaDetail(){
    this.ratingCriteriaService.getCriteriaDetails(this.id).subscribe((res)=>{
      console.log(res[0].ratingCriteria)
      this.criteriaForm.patchValue({
      name:res[0].ratingCriteria,
      status:res[0].status
    })
    })
    }

  submit() {
    let payload = {
      ratingCriteria: this.criteriaForm.controls['name'].value,
      status: this.criteriaForm.controls['status'].value,
    };
    this.id?this.submitEditedDetails(payload):this.submitDetails(payload)
   
  }


submitEditedDetails(recievedValue:any){
let newPayload= Object.assign({},recievedValue)
this.ratingCriteriaService.submitEditedCriteriaDetail(newPayload,this.id).subscribe((res)=>{
 if(res)
 this.route.navigate(['/ratesettings/ratingcriterialist']);
})
}

submitDetails(recievedValue:any){
  let newPayload= Object.assign({},recievedValue)
  this.ratingCriteriaService
  .submitCriteriaDetail(newPayload)
  .subscribe((res) => {
    if (res) {
      this.route.navigate(['/ratesettings/ratingcriterialist']);
    }
  });
}

}
