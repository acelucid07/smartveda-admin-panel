import { Component, OnInit, ViewChild } from '@angular/core';
import { TABLE_HEADING } from '../../_models/table_heading'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { InfluencerService } from '../../_services/influencer.service';
import { CATEGORY } from '../../_models/cms'
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Table } from 'primeng/table';
import { Bundle } from 'src/app/_models/bundle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-influencer-basic-cost',
  templateUrl: './influencer-basic-cost.component.html',
  styleUrls: ['./influencer-basic-cost.component.scss']
})
export class InfluencerBasicCostComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  categoryList: any[]=[];
  payload:any
  fgsType: any;
  reelCostForm:FormGroup;
  postCostForm:FormGroup;
  storyCostForm:FormGroup;
  igtvCostForm:FormGroup;
  swipeUpCostForm:FormGroup;
  videoCostForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private ngxLoader: NgxUiLoaderService,
    private InfluencerService: InfluencerService,
    private toastr: ToastrMsgService,
  ) { 
    this.reelCostForm = this.fb.group({
      minCostPer1kFollowersForReel: ['', Validators.required],
      maxCostper1KFollowersForReel: ['', Validators.required],
      minCostPerLikeForReel: ['', Validators.required],
      maxCostperLikeForReel: ['', Validators.required],
      minCostPerCommentForReel: ['', Validators.required],
      maxCostperCommentForReel: ['', Validators.required]
    })

    this.postCostForm = this.fb.group({
      minCostPer1kFollowersForPosts: ['', Validators.required],
      maxCostper1KFollowersForPosts: ['', Validators.required],
      minCostPerLikeForPosts: ['', Validators.required],
      maxCostperLikeForPosts: ['', Validators.required],
      minCostPerCommentForPosts: ['', Validators.required],
      maxCostperCommentForPosts: ['', Validators.required]
    })

    this.storyCostForm = this.fb.group({
      minCostPer1kFollowersForStory: ['', Validators.required],
      maxCostper1KFollowersForStory: ['', Validators.required],
      minCostPerLikeForStory: ['', Validators.required],
      maxCostperLikeForStory: ['', Validators.required],
      minCostPerCommentForStory: ['', Validators.required],
      maxCostperCommentForStory: ['', Validators.required]
    })

    this.igtvCostForm = this.fb.group({
      minCostPer1kFollowersForIgtv: ['', Validators.required],
      maxCostper1KFollowersForIgtv: ['', Validators.required],
      minCostPerLikeForIgtv: ['', Validators.required],
      maxCostperLikeForIgtv: ['', Validators.required],
      minCostPerCommentForIgtv: ['', Validators.required],
      maxCostperCommentForIgtv: ['', Validators.required]
    })
    this.swipeUpCostForm = this.fb.group({
      minCostPer1kFollowersForSwipeUpStory: ['', Validators.required],
      maxCostper1KFollowersForSwipeUpStory: ['', Validators.required],
      minCostPerLikeForSwipeUpStory: ['', Validators.required],
      maxCostperLikeForSwipeUpStory: ['', Validators.required],
      minCostPerCommentForSwipeUpStory: ['', Validators.required],
      maxCostperCommentForSwipeUpStory: ['', Validators.required]
    })
    this.videoCostForm = this.fb.group({
      minCostPer1kFollowersForVideo: ['', Validators.required],
      maxCostper1KFollowersForVideo: ['', Validators.required],
      minCostPerLikeForVideo: ['', Validators.required],
      maxCostperLikeForVideo: ['', Validators.required],
      minCostPerCommentForVideo: ['', Validators.required],
      maxCostperCommentForVideo: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: '_id', show: true, headers: 'Id' },
      { field: 'full_name', show: true, headers: 'Full Name' },
      { field: 'username', show: true, headers: 'Username' },
      { field: 'category_enum', show: true, headers: 'Category' },
    ]
    this.getCategoryList()
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getCategoryList() {
    this.InfluencerService.getCostDetails().subscribe((res: any) => {
      // console.log(this.categoryList[2]);
      res.result.forEach(element => {
        // console.log(Object.keys(element.costFactorReel)=== 6)
        if(Object.keys(element.costFactorReel).length === 8){// 8 fields determine that basic cost parameters are present
          this.categoryList[0] = element.costFactorReel;
        }
        if(Object.keys(element.costFactorPosts).length === 8){
          this.categoryList[1] = element.costFactorPosts;
        }
        if(Object.keys(element.costFactorStories).length === 8){
          this.categoryList[2] = element.costFactorStories;
        }
        if(Object.keys(element.costFactorIgtv).length === 8){
          this.categoryList[3] = element.costFactorIgtv;
        }
        if(Object.keys(element.costFactorSwipeUp).length === 8){
          this.categoryList[4] = element.costFactorSwipeUp;
        }
        if(Object.keys(element.costFactorVideo).length === 8){
          this.categoryList[5] = element.costFactorVideo;
        }
      });
      // this.categoryList[0] = res.result[0].costFactorReel;
      // this.categoryList[1] = res.result[0].costFactorPosts;
      // this.categoryList[2] = res.result[0].costFactorStories;
      // this.categoryList[3] = res.result[0].costFactorIgtv;
      // this.categoryList[4] = res.result[0].costFactorSwipeUp;
      // this.categoryList[5] = res.result[0].costFactorVideo;
      

      console.log(this.categoryList[0]);
      this.reelCostForm.patchValue({
        minCostPer1kFollowersForReel: this.categoryList[0].minCostPer1kFollowersForReel,
            maxCostper1KFollowersForReel: this.categoryList[0].maxCostper1KFollowersForReel,
            minCostPerLikeForReel:  this.categoryList[0].minCostPerLikeForReel,
            maxCostperLikeForReel:  this.categoryList[0].maxCostperLikeForReel,
            minCostPerCommentForReel:  this.categoryList[0].minCostPerCommentForReel,
            maxCostperCommentForReel:this.categoryList[0].maxCostperCommentForReel
      })

      this.postCostForm.patchValue({
        minCostPer1kFollowersForPosts: this.categoryList[1].minCostPer1kFollowersForPosts,
            maxCostper1KFollowersForPosts: this.categoryList[1].maxCostper1KFollowersForPosts,
            minCostPerLikeForPosts:  this.categoryList[1].minCostPerLikeForPosts,
            maxCostperLikeForPosts:  this.categoryList[1].maxCostperLikeForPosts,
            minCostPerCommentForPosts:  this.categoryList[1].minCostPerCommentForPosts,
            maxCostperCommentForPosts:this.categoryList[1].maxCostperCommentForPosts
      })

      
      this.storyCostForm.patchValue({
        minCostPer1kFollowersForStory: this.categoryList[2].minCostPer1kFollowersForStory,
            maxCostper1KFollowersForStory: this.categoryList[2].maxCostper1KFollowersForStory,
            minCostPerLikeForStory:  this.categoryList[2].minCostPerLikeForStory,
            maxCostperLikeForStory:  this.categoryList[2].maxCostperLikeForStory,
            minCostPerCommentForStory:  this.categoryList[2].minCostPerCommentForStory,
            maxCostperCommentForStory:this.categoryList[2].maxCostperCommentForStory
      })

      this.igtvCostForm.patchValue({
        minCostPer1kFollowersForIgtv: this.categoryList[3].minCostPer1kFollowersForIgtv,
            maxCostper1KFollowersForIgtv: this.categoryList[3].maxCostper1KFollowersForIgtv,
            minCostPerLikeForIgtv:  this.categoryList[3].minCostPerLikeForIgtv,
            maxCostperLikeForIgtv:  this.categoryList[3].maxCostperLikeForIgtv,
            minCostPerCommentForIgtv:  this.categoryList[3].minCostPerCommentForIgtv,
            maxCostperCommentForIgtv:this.categoryList[3].maxCostperCommentForIgtv
      })

      this.swipeUpCostForm.patchValue({
        minCostPer1kFollowersForSwipeUpStory: this.categoryList[4].minCostPer1kFollowersForSwipeUpStory,
            maxCostper1KFollowersForSwipeUpStory: this.categoryList[4].maxCostper1KFollowersForSwipeUpStory,
            minCostPerLikeForSwipeUpStory:  this.categoryList[4].minCostPerLikeForSwipeUpStory,
            maxCostperLikeForSwipeUpStory:  this.categoryList[4].maxCostperLikeForSwipeUpStory,
            minCostPerCommentForSwipeUpStory:  this.categoryList[4].minCostPerCommentForSwipeUpStory,
            maxCostperCommentForSwipeUpStory:this.categoryList[4].maxCostperCommentForSwipeUpStory
      })
      this.videoCostForm.patchValue({
        minCostPer1kFollowersForVideo: this.categoryList[5].minCostPer1kFollowersForVideo,
            maxCostper1KFollowersForVideo: this.categoryList[5].maxCostper1KFollowersForVideo,
            minCostPerLikeForVideo:  this.categoryList[5].minCostPerLikeForVideo,
            maxCostperLikeForVideo:  this.categoryList[5].maxCostperLikeForVideo,
            minCostPerCommentForVideo:  this.categoryList[5].minCostPerCommentForVideo,
            maxCostperCommentForVideo:this.categoryList[5].maxCostperCommentForVideo
      })
      console.log(this.categoryList)
      this.ngxLoader.stop();
    })
  }

  submitreelCostForm() {
    this.payload = {
      minCostPer1kFollowersForReel: parseFloat(this.reelCostForm.controls['minCostPer1kFollowersForReel'].value),
      maxCostper1KFollowersForReel: parseFloat(this.reelCostForm.controls['maxCostper1KFollowersForReel'].value),
      minCostPerLikeForReel:parseFloat(this.reelCostForm.controls['minCostPerLikeForReel'].value),
      maxCostperLikeForReel: parseFloat(this.reelCostForm.controls['maxCostperLikeForReel'].value),
      minCostPerCommentForReel: parseFloat(this.reelCostForm.controls['minCostPerCommentForReel'].value),
      maxCostperCommentForReel: parseFloat(this.reelCostForm.controls['maxCostperCommentForReel'].value)
    }
    this.ngxLoader.start();
console.log(this.payload)
      // this.InfluencerService.editReelCost(this.payload).subscribe(res => {
      //   if (res) {
      //     this.toastr.showSuccess("Post Cost edited successfully", "Edited Cost")
      //     this.ngxLoader.stop();
      //   }
      // (error: any) => {
      //   this.toastr.showError("Somthing wrong Please check", "Error occured")
      //   this.ngxLoader.stop()
      // }
      // })
  }

  submitpostCostForm() {
    this.payload = {
      minCostPer1kFollowersForPosts: parseFloat(this.postCostForm.controls['minCostPer1kFollowersForPosts'].value),
      maxCostper1KFollowersForPosts: parseFloat(this.postCostForm.controls['maxCostper1KFollowersForPosts'].value),
      minCostPerLikeForPosts: parseFloat(this.postCostForm.controls['minCostPerLikeForPosts'].value),
      maxCostperLikeForPosts: parseFloat(this.postCostForm.controls['maxCostperLikeForPosts'].value),
      minCostPerCommentForPosts: parseFloat(this.postCostForm.controls['minCostPerCommentForPosts'].value),
      maxCostperCommentForPosts:parseFloat(this.postCostForm.controls['maxCostperCommentForPosts'].value)
    }
    this.ngxLoader.start();
    console.log(this.payload)
    // this.InfluencerService.editPostCost(this.payload).subscribe(res => {
    //       if (res) {
    //         this.toastr.showSuccess("Post Cost edited successfully", "Edited Cost")
    //         this.ngxLoader.stop();
    //       }
    // (error: any) => {
    //   this.toastr.showError("Somthing wrong Please check", "Error occured")
    //   this.ngxLoader.stop()
    // }
    //     })
  }

  submitStoryCostForm() {
    this.payload = {
      minCostPer1kFollowersForStory: parseFloat(this.storyCostForm.controls['minCostPer1kFollowersForStory'].value),
      maxCostper1KFollowersForStory: parseFloat(this.storyCostForm.controls['maxCostper1KFollowersForStory'].value),
      minCostPerLikeForStory: parseFloat(this.storyCostForm.controls['minCostPerLikeForStory'].value),
      maxCostperLikeForStory: parseFloat(this.storyCostForm.controls['maxCostperLikeForStory'].value),
      minCostPerCommentForStory: parseFloat(this.storyCostForm.controls['minCostPerCommentForStory'].value),
      maxCostperCommentForStory: parseFloat(this.storyCostForm.controls['maxCostperCommentForStory'].value)
    }
    this.ngxLoader.start();
    console.log(this.payload)
    // this.InfluencerService.editStoryCost(this.payload).subscribe(res => {
    //       if (res) {
    //         this.toastr.showSuccess("Story Cost edited successfully", "Edited Story")
    //         this.ngxLoader.stop();
    //       }
    // (error: any) => {
    //   this.toastr.showError("Somthing wrong Please check", "Error occured")
    //   this.ngxLoader.stop()
    // }
    //     })
  }

  submitIgtvCostForm() {
    this.payload = {
      minCostPer1kFollowersForIgtv: parseFloat(this.igtvCostForm.controls['minCostPer1kFollowersForIgtv'].value),
      maxCostper1KFollowersForIgtv: parseFloat(this.igtvCostForm.controls['maxCostper1KFollowersForIgtv'].value),
      minCostPerLikeForIgtv: parseFloat(this.igtvCostForm.controls['minCostPerLikeForIgtv'].value),
      maxCostperLikeForIgtv: parseFloat(this.igtvCostForm.controls['maxCostperLikeForIgtv'].value),
      minCostPerCommentForIgtv: parseFloat(this.igtvCostForm.controls['minCostPerCommentForIgtv'].value),
      maxCostperCommentForIgtv: parseFloat(this.igtvCostForm.controls['maxCostperCommentForIgtv'].value)
    }
    this.ngxLoader.start();
    console.log(this.payload)
    this.InfluencerService.editIgtvCost(this.payload).subscribe(res => {
          if (res) {
            this.toastr.showSuccess("Igtv Cost edited successfully", "Edited Igtv")
            this.ngxLoader.stop();
          }
          (error: any) => {
            this.toastr.showError("Somthing wrong Please check", "Error occured")
            this.ngxLoader.stop()
          }
        })
  }

  submitSwipeUpCostForm() {
    this.payload = {
      minCostPer1kFollowersForSwipeUpStory: parseFloat(this.swipeUpCostForm.controls['minCostPer1kFollowersForSwipeUpStory'].value),
      maxCostper1KFollowersForSwipeUpStory: parseFloat(this.swipeUpCostForm.controls['maxCostper1KFollowersForSwipeUpStory'].value),
      minCostPerLikeForSwipeUpStory: parseFloat(this.swipeUpCostForm.controls['minCostPerLikeForSwipeUpStory'].value),
      maxCostperLikeForSwipeUpStory: parseFloat(this.swipeUpCostForm.controls['maxCostperLikeForSwipeUpStory'].value),
      minCostPerCommentForSwipeUpStory: parseFloat(this.swipeUpCostForm.controls['minCostPerCommentForSwipeUpStory'].value),
      maxCostperCommentForSwipeUpStory: parseFloat(this.swipeUpCostForm.controls['maxCostperCommentForSwipeUpStory'].value)
    }
    this.ngxLoader.start();
    console.log(this.payload)
    // this.InfluencerService.editSwipeUpCost(this.payload).subscribe(res => {
    //       if (res) {
    //         this.toastr.showSuccess("SwipeUp Cost edited successfully", "Edited SwipeUp")
    //         this.ngxLoader.stop();
    //       }
    // (error: any) => {
    //   this.toastr.showError("Somthing wrong Please check", "Error occured")
    //   this.ngxLoader.stop()
    // }
    //     })
  }
  
  submitVideoCostForm() {
    this.payload = {
      minCostPer1kFollowersForVideo: parseFloat(this.videoCostForm.controls['minCostPer1kFollowersForVideo'].value),
      maxCostper1KFollowersForVideo: parseFloat(this.videoCostForm.controls['maxCostper1KFollowersForVideo'].value),
      minCostPerLikeForVideo: parseFloat(this.videoCostForm.controls['minCostPerLikeForVideo'].value),
      maxCostperLikeForVideo: parseFloat(this.videoCostForm.controls['maxCostperLikeForVideo'].value),
      minCostPerCommentForVideo: parseFloat(this.videoCostForm.controls['minCostPerCommentForVideo'].value),
      maxCostperCommentForVideo: parseFloat(this.videoCostForm.controls['maxCostperCommentForVideo'].value)
    }
    this.ngxLoader.start();
    console.log(this.payload)
    // this.InfluencerService.editVideoCost(this.payload).subscribe(res => {
    //       if (res) {
    //         this.toastr.showSuccess("Video Cost edited successfully", "Edited Video")
    //         this.ngxLoader.stop();
    //       }
    // (error: any) => {
    //   this.toastr.showError("Somthing wrong Please check", "Error occured")
    //   this.ngxLoader.stop()
    // }
    //     })
  }

  // deleteCategory(categoryList: any) {
  //   this.ngxLoader.start();
  //   this.CmsService.deleteCategory(categoryList.id).subscribe(res => {
  //     if (res) {
  //       this.toastr.showSuccess("sponsor deleted successfully", "sponsor delete")
  //       this.getCategoryList()
  //     }
  //   })
  // }
  //Search functionality start here
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
