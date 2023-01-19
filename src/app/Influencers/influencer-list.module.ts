import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluencerBasicCostComponent } from './Edit-basic-cost/influencer-basic-cost.component';
import { InfluencerCostComponent } from './influencer-cost/influencer-cost.component';
const routes: Routes = [
  {
    path: 'influencerlist', component: InfluencerBasicCostComponent
  },
  {
    path: 'influencercost', component: InfluencerCostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class InfluencerRoutingModule { }
