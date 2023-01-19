import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BundleService } from 'src/app/_services/bundle.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
// import { Table } from 'primeng/table';
@Component({
  selector: 'app-create-bundle',
  templateUrl: './create-bundle.component.html',
  styleUrls: ['./create-bundle.component.scss']
})
export class CreateBundleComponent implements OnInit {
    sidebarSpacing:String;
    firstname:any
    id: any;
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
      
      // this.activateRoute.queryParamMap.subscribe(params => {
      //   this.id = params.get('id');
      //   if (this.id && this.id != undefined) {
      //     this.editMode = true
      //     this.title = "Edit Bundle"
      //   } else {
      //     this.editMode = false
      //     this.title = "Add New Bundle"
      //   }
      // });
     }

    onToggleSidebar(sidebarState: any) {
      if (sidebarState === 'open') {
        this.sidebarSpacing = 'contracted';
      } else {
        this.sidebarSpacing = 'expanded';
      }
    }
    // addDataToBundle(){
    //   this.bundleService.addBundle(this.firstname.value).subscribe((res)=>{
    //     console.log(res)  
    //   })
    //   console.log(this.firstname.value)
    // }
   
    submitForm() {
      this.ngxLoader.start();
      console.log(this.firstname.value)
      // if (this.editMode) {
      //   this.editCategory()
      // } else {
        this.addCategory()
      // }
    }
    addCategory() {
     this.bundleService.addBundle({"categoryName":this.firstname.value}).subscribe(res => {
        if (res) {
          this.toastr.showSuccess("Bundle added successfully", "Bundle Added")
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