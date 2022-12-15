import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';


const routes: Routes = [
  {
    path: '',
    component: AppoinmentListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppoinmentRoutingModule { }
