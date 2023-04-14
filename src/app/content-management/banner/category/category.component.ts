import { Component, OnInit, ViewChild } from '@angular/core';
import { TABLE_HEADING } from '../../../_models/table_heading'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { CmsService } from '../../../_services/cms.service';
import { CATEGORY } from '../../../_models/cms'
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Table } from 'primeng/table';
import { ModulePermissionService } from 'src/app/_services/module-permission.service';
import { access } from 'src/app/_models/modulepermission';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  categoryList: CATEGORY[] = []
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
      { field: 'position', show: true, headers: 'Position' },
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
    this.CmsService.getCategoryList().subscribe((res: CATEGORY[]) => {
      this.categoryList = res
      console.log(this.categoryList,"--------------------")
      this.ngxLoader.stop();
    })
  }

  
  deleteCategory(categoryList: any) {
    this.ngxLoader.start();
    this.CmsService.deleteCategory(categoryList.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("sponsor deleted successfully", "sponsor delete")
        this.getCategoryList()
      }
    })
  }
  //Search functionality start here
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
