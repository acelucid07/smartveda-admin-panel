import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { csvstructure } from 'src/app/_models/bundle'
import { Papa } from 'ngx-papaparse';
import { BundleService } from 'src/app/_services/bundle.service';
import { request } from 'http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
// import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
// import { Table } from 'primeng/table';
@Component({
  selector: 'app-add-influencer-csv',
  templateUrl: './add-influencer-csv.component.html',
  styleUrls: ['./add-influencer-csv.component.scss']
})
export class AddInfluencerCsvComponent implements OnInit {
    sidebarSpacing:String;
    File:any;
    
    arrayFile:Array<csvstructure>;
    constructor(private toastr: ToastrMsgService,
      private ngxLoader: NgxUiLoaderService,
      private route: Router,
      private bundleService: BundleService,
      private csvConvert: Papa) { }
    ngOnInit(): void {
      this.sidebarSpacing = 'contracted';
     }
    onToggleSidebar(sidebarState: any) {
      if (sidebarState === 'open') {
        this.sidebarSpacing = 'contracted';
      } else {
        this.sidebarSpacing = 'expanded';
      }
    }

    csvInputChange(inputData:any){
      if(inputData.target.files[0].type!='text/csv')
      this.toastr.showError("file uploaded is not CSV", "Error occured")
      else
      {
      //  let jsondata = getJsonFromCsv(inputData.target.files[0])
       this.csvConvert.parse(inputData.target.files[0],{
        header: true,
        skipEmptyLines:true,
        complete: (result) => {
          this.arrayFile = result.data;
            console.log('Parsed: ', result.data);
        }

    })
      //   var reader = new FileReader();
      // reader.readAsText(inputData.target.files[0]);
      // reader.onload = (data) => {
      //   this.File = data.target.result;
      //   console.log(data.target.result)
      // }
      }
    }

  
    Submit(){ 
    //   this.bundleService.addInfluencers().subscribe((res)=>{
    //     re
    //   })
    //   let requests = ids.map(id => {
    //     return new Promise((resolve, reject) => {
    //        request({
    //        uri: <API url>+'?id=' + id,
    //        method: 'POST'
    //        })
    //     })
    //  })
    this.ngxLoader.start();
    console.log(this.arrayFile)
     var productsToReturn = []
     let requests = this.arrayFile.map(data => {
      console.log(data)
      //create a promise for each API call
      return new Promise((resolve, reject) => {
       this.bundleService.addInfluencersByCsv(data).subscribe((res)=>{
      if(res)
      resolve(res)
      })
     })})
     Promise.all(requests).then((resolvedbody) => { 
      // resolvedbody.forEach(res => {
      // if (res)
      //    productsToReturn.push(JSON.parse(res))     
      // })
       if (resolvedbody) {
         console.log(resolvedbody)
         this.bundleService.addInfluencersDetails().subscribe((res) => {
           console.log(res)
          if(res)
          { this.toastr.showSuccess("Influencers added successfully", "Influencers Added")
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
    })
       
     
      console.log(this.arrayFile)
    }
}