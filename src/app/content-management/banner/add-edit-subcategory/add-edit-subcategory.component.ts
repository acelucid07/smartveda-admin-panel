import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { SUB_CATEGORY } from '../../../_models/cms'
import { CmsService } from '../../../_services/cms.service'
@Component({
  selector: 'app-add-edit-subcategory',
  templateUrl: './add-edit-subcategory.component.html',
  styleUrls: ['./add-edit-subcategory.component.scss']
})
export class AddEditSubcategoryComponent implements OnInit {

  sidebarSpacing: any;
  subCategoryForm: FormGroup;
  fgsType: any;
  id: any
  title: string = " "
  editMode: boolean = false
  constructor(fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private CmsService: CmsService,
    private route: Router,
    private toastr: ToastrMsgService,
    private ngxLoader: NgxUiLoaderService,) {
    this.subCategoryForm = fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      hyperlink: ['', [Validators.required]],
      parentCategoryId: [null, [Validators.required]],
      parentCategoryName: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id && this.id != undefined) {
        this.editMode = true
        this.title = "Edit Sub-Category"
        this.getSubCategoryById()
      } else {
        this.editMode = false
        this.title = "Add Sub-Category"
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
  getSubCategoryById() {
    this.CmsService.getSubCategoryListById(this.id).subscribe((res:any) => {
      this.subCategoryForm.patchValue({
        id: res.id,
        name: res.name,
        image: res.image,
        hyperlink: res.hyperlink,
        parentCategoryId: res.parent_category.id,
        parentCategoryName: res.parent_category.name
      })
      console.log(this.subCategoryForm.value)
      this.ngxLoader.stop();
    })
  }
  submitForm() {
    this.ngxLoader.start();
    if (this.editMode) {
      this.editSubCategory()
    } else {
      this.addSubCategory()
    }
  }
  addSubCategory() {
    let payload ={
      name: this.subCategoryForm.controls['name'].value,
      image: this.subCategoryForm.controls['image'].value,
      hyperlink: this.subCategoryForm.controls['hyperlink'].value,
      parent_category: {
        id: this.subCategoryForm.controls['parentCategoryId'].value,
        name: this.subCategoryForm.controls['parentCategoryName'].value
      }
    }
    this.CmsService.addSubCategory(payload).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("subCategory added successfully", "SubCategory Added")
        this.ngxLoader.stop()
        this.route.navigate(['crm/subcategory'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }

  editSubCategory() {
    let payload = {
      id: this.id,
      name: this.subCategoryForm.controls['name'].value,
      image: this.subCategoryForm.controls['image'].value,
      hyperlink: this.subCategoryForm.controls['hyperlink'].value,
      parent_category: {
        id: this.subCategoryForm.controls['parentCategoryId'].value,
        name: this.subCategoryForm.controls['parentCategoryName'].value
      }
    }
    this.CmsService.editSubCategory(payload, this.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("SubCategory edit successfully", "SubCategory edit")
        this.ngxLoader.stop()
        this.route.navigate(['/crm/subcategory'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }

}
