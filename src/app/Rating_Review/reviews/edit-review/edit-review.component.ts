import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewsService } from 'src/app/_services/reviews.service';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.scss'],
})
export class EditReviewComponent implements OnInit {
  sidebarSpacing: string = 'contracted';
  reviewList: string[] = ['Friend', 'Family', 'Business Trip'];
  statusList: string[] = ['Active', 'Inactive'];
  serialno: number;
  editForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private reviewService: ReviewsService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private reviewsService:ReviewsService
  ) {
    this.activatedRoute.queryParamMap.subscribe((res) => {
      this.serialno = parseInt(res.get('serialno'));
      console.log(this.serialno);
    });

    this.editForm = this.fb.group({
      rating: ['4'],
      lastRating: ['24-03-2023, 12:34am By Rahul'],
      reviewerType: ['', [Validators.required]],
      reviewPublishPage: ['', [Validators.required]],
      referenceId: ['', [Validators.required]],
      reviewStatus: ['', [Validators.required]],
    });
    this.getReviewList()
  }

  ngOnInit(): void {
   
  }

  submit() {
    let payload = {
      reviewSubject: this.editForm.controls['referenceId'].value,
      publishingsiteurl: this.editForm.controls['reviewPublishPage'].value,
      rating: this.editForm.controls['rating'].value,
      status: this.editForm.controls['reviewStatus'].value,
    };

    this.reviewService
      .submitEditDetail(payload, this.serialno)
      .subscribe((res) => {
        if (res) {
          this.route.navigate(['/review/reviewlist']);
        }
      });
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }


  getReviewList(){
    this.reviewsService.getReviewDetail(this.serialno).subscribe((res)=>{
      console.log(res)
      this.editForm.patchValue({
        rating:res[0].rating,
        reviewerType: 'Friend',
        reviewPublishPage: res[0].publishingsiteurl,
        referenceId: res[0].reviewSubject,
        reviewStatus: res[0].status,
      });
    })
  }
}
