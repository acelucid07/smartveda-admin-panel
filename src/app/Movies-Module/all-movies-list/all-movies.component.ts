import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { MoviesService } from 'src/app/_services/movies.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Movies } from 'src/app/_models/movies';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators, FormArray, } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
  providers: [ConfirmationService]
})
export class AllMoviesComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  moviesList: Movies[]
  fgsType: any;
  display: boolean = false;
  image: File;
  imageUrl;
  imageBase64 = [];
  moviesPoster = [];
  message: string;
  AllMoviesForm: FormGroup
  constructor(private ngxLoader: NgxUiLoaderService,
    private fb: FormBuilder,
    private MoviesService: MoviesService,
    private confirmationService: ConfirmationService,
    private toastr: ToastrMsgService,) {
    this.AllMoviesForm = this.fb.group({
      Director: ["", [Validators.required]],
      isActive: ['', [Validators.required]],
      releaseYear: ['', [Validators.required]],
      Length: ['', [Validators.required]],
      PosterContent: ['', [Validators.required]],
      PosterContentThumb: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      minutes: ['', [Validators.required]],
      seconds: ['', [Validators.required]],
      Rating: ['', [Validators.required]],
      moviesPoster: ['', [Validators.required]],
      screenShot: this.fb.array([]),
    })
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'title', show: true, headers: 'Title' },
      { field: 'director', show: true, headers: 'Director' },
      { field: 'releaseYear', show: true, headers: 'Release Year' },
      { field: 'length', show: true, headers: 'Length' },
      { field: 'isActive', show: true, headers: 'Status' },
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
      this.moviesList = res
      this.ngxLoader.stop();
    })
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  EditMovies(id) {
    let moviesData = this.moviesList.filter(item => item.id === id)
    console.log(moviesData)
    this.AllMoviesForm.patchValue({
      Director: moviesData[0].director,
      releaseYear:moviesData[0].releaseYear,
      Title: moviesData[0].title,
      isActive:moviesData[0].isActive,
    })
    this.moviesPoster.pop();
    this.imageBase64.pop();
    this.display = true

  }
  AddMovies() {
    this.AllMoviesForm.reset()
    this.display = true
    this.moviesPoster.pop();
    this.imageBase64.pop();
  }
  OnChange(event, Status, index) {
    this.image = event.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      if (!Status) {
        this.moviesPoster[0] = data.target.result
      } else {
        this.imageBase64[index] = data.target.result;
      }
    }
  }
  addISchreenShotControl() {
    this.allmovies.push(this.AddFormGroup())
  }
  AddFormGroup(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
  get allmovies(): FormArray {
    return this.AllMoviesForm.get('screenShot') as FormArray
  }
  deleteMovies(moviesId) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Movies ?',
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
  markAsActive(id: number, Status: boolean) {
    if (Status) {
      this.message = "Are you sure that you want to mark as Active"
    } else {
      this.message = "Are you sure that you want to mark as InActive"
    }
    this.confirmationService.confirm({
      message: this.message,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.MoviesService.markAsActive(id, Status).subscribe(res => {
          if (res) {
            this.toastr.showSuccess(" Status change successfully", "Status change")
            this.getMovieList()
          }
        })
      },
    });

  }
}
