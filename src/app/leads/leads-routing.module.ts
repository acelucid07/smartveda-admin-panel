import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadCreateComponent } from './lead-create/lead-create.component';
import { LeadsListComponent } from './leads-list/leads-list.component';
const routes:Routes=[{ path:'leadslist', component:LeadsListComponent},
{ path:'leadcreate', component:LeadCreateComponent},
]
@NgModule({
  imports: [RouterModule.forChild(routes)
  ]
})
export class LeadsRoutingModule { }
