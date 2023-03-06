import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { Movies } from 'src/app/_models/movies';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { MoviesService } from 'src/app/_services/movies.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-active-movies',
  templateUrl: './active-movies.component.html',
  styleUrls: ['./active-movies.component.scss'],
  providers: [ConfirmationService]
})
export class ActiveMoviesComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  moviesList: Movies[] = []
  fgsType: any;
  display: boolean = false;
  ActiveMoviesForm: FormGroup
  image: File;
  imageUrl;
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private MoviesService: MoviesService,
    private toastr: ToastrMsgService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
  ) {
    this.ActiveMoviesForm = this.fb.group({
      Director: ["", [Validators.required]],
      File: ['', [Validators.required]],
      IsActive: ['', [Validators.required]],
      releaseYear: ['', [Validators.required]],
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
    this.MoviesService.getMovieList().subscribe((res) => {
      console.log(res.filter(item => item.isActive === true))
      this.moviesList = res.filter(item => item.isActive === true)
      console.log(this.moviesList)
      this.ngxLoader.stop();
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
     Title: moviesData[0].title,
    })
    this.display = true
  }
  AddMovies() {
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
  deleteMovies(moviesId) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete Active Movies ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.MoviesService.deleteMovies(moviesId).subscribe((res) => {
          this.getMovieList()
        })
      },
    });

  }
}
