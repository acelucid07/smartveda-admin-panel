import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadCreateComponent } from './lead-create/lead-create.component';
import { LeadsListComponent } from './leads-list/leads-list.component';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { LeadEditComponent } from './lead-edit/lead-edit.component';
import { LeadViewComponent } from './lead-view/lead-view.component';

const routes:Routes=[{ path:'leadslist', component:LeadsListComponent},
{ path:'leadcreate', component:LeadCreateComponent},
{ path:'leadedit', component:LeadEditComponent},
{ path:'leadview', component:LeadViewComponent},
]
@NgModule({
  imports: [RouterModule.forChild(routes),
    DropdownModule,
    CalendarModule
  ]
})
export class LeadsRoutingModule { }
