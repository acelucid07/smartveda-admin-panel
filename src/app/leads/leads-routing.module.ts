import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsListComponent } from './leads-list.component';

const routes:Routes=[{ path:'leadslist', component:LeadsListComponent}]
@NgModule({
  imports: [RouterModule.forChild(routes)
  ]
})
export class LeadsRoutingModule { }
