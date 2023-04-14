import { Component, OnInit, ViewChild } from '@angular/core';
import { BANNERSPECIAL } from 'src/app/_models/cms';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { Table } from 'primeng/table';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { ModulePermissionService } from 'src/app/_services/module-permission.service';
import { CmsService } from '../../../_services/cms.service';
import { access } from 'src/app/_models/modulepermission';
import { DialogComponent } from 'src/app/leads/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BannerDialogComponent } from '../banner-dialog/banner-dialog.component';
@Component({
  selector: 'app-banner-special',
  templateUrl: './banner-special.component.html',
  styleUrls: ['./banner-special.component.scss']
})
export class BannerSpecialComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  fgsType: any;
  bannerList: BANNERSPECIAL[]=[]
  accessPermission:access

  constructor(private ngxLoader: NgxUiLoaderService,
    private CmsService: CmsService,
    private toastr: ToastrMsgService,
    private permissionService:ModulePermissionService,
    public dialog: MatDialog) {
      this.permissionService.getModulePermission().subscribe(res=>{ 
        this.accessPermission=res[0].CmsBanner
       
      })
     }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
   
    this.cols = [
      { field: 'bannerimage', show: true, headers: 'Banner Image' },
      { field: 'url', show: true, headers: 'URL' },
      { field: 'description', show: true, headers: 'Description' },
      { field: 'sortby', show: true, headers: 'Sort By' },
      { field: 'action', show: true, headers: 'Action' },
    ]
    this.getbannerList();

    // $('#myModal').on('shown.bs.modal', function () {
    //   $('#myInput').trigger('focus')
    // })
  }
  
  getbannerList() {
    this.CmsService.getSpecialBannerList().subscribe((res: BANNERSPECIAL[]) => {
      this.bannerList = res
      console.log(this.bannerList,"--------------------")
      this.ngxLoader.stop();
    })
  }

  deleteBanner(bannerList: any) {
    this.ngxLoader.start();
    this.CmsService.deleteSpecialBanner(bannerList.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("bannerSpecial deleted successfully", "banner delete")
        this.getbannerList()
      }
    })
  }
  openDialog(deleteList: any) {
    const dialogRef = this.dialog.open(BannerDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.deleteBanner(deleteList)
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
