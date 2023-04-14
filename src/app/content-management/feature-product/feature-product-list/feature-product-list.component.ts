import { Component, OnInit, ViewChild } from '@angular/core';
import { BANNERSPECIAL, FEATURE } from 'src/app/_models/cms';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { Table } from 'primeng/table';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { ModulePermissionService } from 'src/app/_services/module-permission.service';
import { CmsService } from '../../../_services/cms.service';
import { access } from 'src/app/_models/modulepermission';

@Component({
  selector: 'app-feature-product-list',
  templateUrl: './feature-product-list.component.html',
  styleUrls: ['./feature-product-list.component.scss']
})
export class FeatureProductListComponent implements OnInit {

  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  featureList : FEATURE[]=[]
  accessPermission:access
  
  constructor(private ngxLoader: NgxUiLoaderService,
    private CmsService: CmsService,
    private toastr: ToastrMsgService,
    private permissionService:ModulePermissionService) {
      this.permissionService.getModulePermission().subscribe(res=>{ 
        this.accessPermission=res[0].CmsBanner
        console.log( this.accessPermission)
      })
     }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'sr.no', show: true, headers: 'Sr.no' },
      { field: 'image', show: true, headers: 'Image' },
      { field: 'product name', show: true, headers: 'Product Name' },
      { field: 'Modal', show: true, headers: 'Modal' },
      { field: 'price', show: true, headers: 'Price' },
      { field: 'quantity', show: true, headers: 'Quantity' },
      { field: 'action', show: true, headers: 'Action' },
    ]
    this.getFeatureList();
  }

  getFeatureList(){
    this.CmsService.getFeatureList().subscribe((res: FEATURE[]) => {
      this.featureList = res
      //console.log(this.bannerList,"--------------------")
      this.ngxLoader.stop();
    })
  }
  
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

}
