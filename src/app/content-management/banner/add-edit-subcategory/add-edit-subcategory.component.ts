import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-subcategory',
  templateUrl: './add-edit-subcategory.component.html',
  styleUrls: ['./add-edit-subcategory.component.scss']
})
export class AddEditSubcategoryComponent implements OnInit {

  sidebarSpacing: any;
  subCategoryForm: FormGroup;

  constructor( fb:FormBuilder) { 
    this.subCategoryForm = fb.group({
      id: ['', [Validators.required]],
      name : ['', [Validators.required]],
      image: ['', [Validators.required]],
      hyperlink: ['', [Validators.required]],
      parentCategoryId:['',[Validators.required]],
      parentCategoryName: ['', [Validators.required]],
    })
  }

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
}
