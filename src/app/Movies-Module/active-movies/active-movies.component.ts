import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import {  Movies } from 'src/app/_models/catalog';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { ProductService } from 'src/app/_services/product.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-active-movies',
  templateUrl: './active-movies.component.html',
  styleUrls: ['./active-movies.component.scss']
})
export class ActiveMoviesComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  moviesList:Movies []= []
  fgsType: any;
  display: boolean = false;
  ActiveMoviesForm: FormGroup
  image: File;
  imageUrl;
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private ProductService: ProductService,
    private toastr: ToastrMsgService,
    private fb: FormBuilder,
  ) { 
    this.ActiveMoviesForm = this.fb.group({
      Director: ["", [Validators.required]],
      File: ['', [Validators.required]],
      IsActive: ['', [Validators.required]],
      ReleaseYear: ['', [Validators.required]],
      Length: ['', [Validators.required]],
      PosterContent: ['', [Validators.required]],
      PosterContentThumb: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      minutes: ['', [Validators.required]],
      seconds: ['', [Validators.required]],
      Rating: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'title', show: true, headers: 'Title' },
      { field: 'director', show: true, headers: 'Director' },
      { field: 'releaseyear', show: true, headers: 'Release Year' },
      { field: 'length', show: true, headers: 'Length' },
      { field: 'isActive', show: true, headers: 'Is Active' },
    ]
     this.getMovieList()
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  getMovieList() {
    this.ProductService.getMovieList().subscribe((res) => {
      console.log(res)
      this.moviesList =  res
      console.log(this.moviesList)
      this.ngxLoader.stop();
    })
  }

  deleteCategory(categoryList: any) {
    this.ngxLoader.start();
    this.ProductService.deleteCategory(categoryList.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Category deleted successfully", "Category delete")
        this.getMovieList()
      }
    })
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  EditMovies(id) {
    let moviesData = this.moviesList.filter(item => item.id === id)
    console.log(moviesData)
    this.ActiveMoviesForm.patchValue({
      Director: moviesData[0].director,
      ReleaseYear: moviesData[0].releaseyear,
      Title: moviesData[0].title,
    })
    this.display = true
  }
  AddMovies(){
    this.ActiveMoviesForm.reset()
    this.display = true
  }
  OnChange(event) {
    this.image = event.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.imageUrl = data.target.result;
    }
  }
}
