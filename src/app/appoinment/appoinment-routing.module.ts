import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditAppoinmentComponent } from './add-edit-appoinment/add-edit-appoinment.component';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';


const routes: Routes = [
  {
    path: '',
    component: AppoinmentListComponent,
  },
  {
    path: 'add',
    component: AddEditAppoinmentComponent
  },
  {
    path: 'edit',
    component: AddEditAppoinmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppoinmentRoutingModule { }
