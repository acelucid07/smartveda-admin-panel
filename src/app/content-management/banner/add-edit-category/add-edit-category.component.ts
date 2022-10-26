import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { CmsService } from '../../../_services/cms.service'
import { CATEGORY } from '../../../_models/cms'
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss']
})
export class AddEditCategoryComponent implements OnInit {
  categoryForm: FormGroup
  fgsType: any;
  sidebarSpacing: any;
  id: any
  title: string = " "
  editMode: boolean = false
  constructor(private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService,
    private CmsService: CmsService) {
    this.categoryForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      hyperlink: ['', [Validators.required]],
      position: ['', [Validators.required]],
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
        this.title = "Edit Category"
        this.getCategoryById()
      } else {
        this.editMode = false
        this.title = "Add New Category"
      }
    });
  }
  getCategoryById() {
    this.CmsService.getCategoryById(this.id).subscribe((res: CATEGORY) => {
      this.categoryForm.patchValue({
        id: res.id,
        name: res.name,
        image: res.image,
        position: res.position,
        hyperlink: res.hyperlink
      })
      console.log(this.categoryForm.value)
      this.ngxLoader.stop();
    })
  }
  submitForm() {
    this.ngxLoader.start();
    if (this.editMode) {
      this.editCategory()
    } else {
      this.addCategory()
    }
}
  addCategory() {
    this.CmsService.addCategory(this.categoryForm.value).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Category added successfully", "Category Added")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }

  editCategory() {
    this.CmsService.editCategory(this.categoryForm.value, this.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Category edit successfully", "Category edit")
        this.ngxLoader.stop()
        this.route.navigate(['/crm/category'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
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
