import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BundleService } from 'src/app/_services/bundle.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-add-influencer',
  templateUrl: './add-influencer.component.html',
  styleUrls: ['./add-influencer.component.scss']
})
export class AddInfluencerComponent implements OnInit {
  sidebarSpacing:String;
  firstname:any
  bundleName:String;
  title: string = " ";
  editMode: boolean = false;
  constructor(private activateRoute: ActivatedRoute,
    private bundleService: BundleService,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService,) {
     this.firstname = new FormControl() 
   }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe(params => {
      this.bundleName = params.get('categoryName');
    });
   }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  submitForm() {
    this.ngxLoader.start();
    console.log(this.firstname.value)
    this.addCategory()
  }

  addCategory() {
   this.bundleService.addInfluencers({"username":this.firstname.value,"categoryName":this.bundleName}).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Influencer added successfully", "Influencer Added")
        this.ngxLoader.stop()
        this.route.navigate(['/bundle/bundlelist'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }

  // editCategory() {
  //   this.bundleService.editBundle(this.firstname.value, this.id).subscribe(res => {
  //     if (res) {
  //       this.toastr.showSuccess("Bundle edit successfully", "Bundle edit")
  //       this.ngxLoader.stop()
  //       this.route.navigate(['/crm/category'])
  //     }
  //     (error: any) => {
  //       this.toastr.showError("Somthing wrong Please check", "Error occured")
  //       this.ngxLoader.stop()
  //       this.route.navigate(['/'])
  //     }
  //   })
  // }
}