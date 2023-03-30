import { Component, OnInit, ViewChild } from '@angular/core';
import { TABLE_HEADING } from '../../../_models/table_heading'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { SUB_CATEGORY } from '../../../_models/cms';
import { CmsService } from '../../../_services/cms.service'
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Table } from 'primeng/table';
import { ModulePermissionService } from 'src/app/_services/module-permission.service';
import { access } from 'src/app/_models/modulepermission';
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  subCategoryList: SUB_CATEGORY[] = []
  fgsType: any;
  accessPermission:access
  constructor(private ngxLoader: NgxUiLoaderService,
    private CmsService: CmsService,
    private toastr: ToastrMsgService, 
    private permissionService:ModulePermissionService
    ){
        this.permissionService.getModulePermission().subscribe(res=>{ 
          this.accessPermission=res[0].CmsBanner
          console.log( this.accessPermission)
        })
      }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'id', show: true, headers: 'Id' },
      { field: 'name', show: true, headers: 'Name' },
      { field: 'image', show: true, headers: 'ImageName' },
      { field: 'hyperlink', show: true, headers: 'Hyperlink' },
      { field: 'parent_id', show: true, headers: 'Parent Id' },
      { field: 'parent_name', show: true, headers: 'Parent Name' },
    ]
    this.getSubCategoryList()
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getSubCategoryList() {
    this.CmsService.getSubCategoryList().subscribe((res: any) => {
      this.subCategoryList = res;
      this.ngxLoader.stop();
    })
  }
  deleteSubCategory(subCategoryList: any) {
    this.ngxLoader.start();
    this.CmsService.deleteSubCategory(subCategoryList.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("subCategory deleted successfully", "subCategory delete")
        this.getSubCategoryList()
      }
    })
  }
  //search functionality start here
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
