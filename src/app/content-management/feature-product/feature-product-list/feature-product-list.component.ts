import { Component, OnInit, ViewChild } from '@angular/core';
import { BANNERSPECIAL, FEATURE } from 'src/app/_models/cms';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { Table } from 'primeng/table';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { ModulePermissionService } from 'src/app/_services/module-permission.service';
import { CmsService } from '../../../_services/cms.service';
import { access } from 'src/app/_models/modulepermission';
import { MatDialog } from '@angular/material/dialog';
import { BannerDialogComponent } from '../../banner-special/banner-dialog/banner-dialog.component';
import { DialogFeatureComponent } from '../dialog-feature/dialog-feature.component';

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
    private permissionService:ModulePermissionService,
    public dialog: MatDialog) {
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

  
  deleteProduct(featureList: any) {
    this.ngxLoader.start();
    this.CmsService.deleteProduct(featureList.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Feature Product deleted successfully", "Feature Product delete")
        this.getFeatureList()
      }
    })
  }

  openDialog(deleteList: any) {
    const dialogRef = this.dialog.open(DialogFeatureComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.deleteProduct(deleteList)
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

}
