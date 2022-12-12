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
  payload: CATEGORY
  id: any
  title: string = " "
  editMode: boolean = false
  image: File
  URL: any = "https://adminpanelbucket.s3.amazonaws.com/pexels-pixabay-14365.jpg";
  constructor(private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService,
    private CmsService: CmsService) {
    this.categoryForm = this.fb.group({
      id:['',Validators.required],
      name: ['', [Validators.required]],
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
      this.ngxLoader.stop();
    })
  }
  submitForm() {
    this.payload = {
      id: this.categoryForm.controls['id'].value,
      name: this.categoryForm.controls['name'].value,
      image: this.image,
      hyperlink: this.categoryForm.controls['hyperlink'].value,
      position: this.categoryForm.controls['position'].value,
    }
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
        this.route.navigate(['/crm/category'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }

  editCategory() {
    console.log(this.payload)
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
  OnChangesEvent(event) {
    this.image = event.target.files;
    console.log(event.target.files)
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.URL = data.target.result;
      console.log(data.target.result)
    }
  }
}
