import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { ProfileBasicInfoComponent } from './profile/profile-basic-info/profile-basic-info.component';
import { AuthGuardService as AuthGuard} from './_services/auth-guard.service';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(mod => mod.CustomerModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'order',
    loadChildren: () => import('./order-management/order-management.module').then(mod => mod.OrderManagementModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cms',
    loadChildren: () => import('./content-management/content-management.module').then(mod => mod.ContentManagementModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product',
    loadChildren: () => import('./product-management/product-management.module').then(mod => mod.ProductManagementModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'marketing',
    loadChildren: () => import('./marketing-management/marketing-management.module').then(mod => mod.MarketingManagementModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appoinment/appoinment.module').then(mod=>mod.AppoinmentModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'bundle',
    loadChildren: () => import('./Bundle/bundle.module').then(mod=>mod.BundleModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'influencers',
    loadChildren: () => import('./Influencers/influencer.module').then(mod=>mod.InfluencerModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user-management/user-management.module').then(mod=>mod.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'leads',
    loadChildren: () => import('./leads/leads.module').then(mod=>mod.LeadsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'rating',
    loadChildren: () => import('./Rating_Review/Rating/rating.module').then(mod=>mod.AdminRatingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'review',
    loadChildren: () => import('./Rating_Review/reviews/review.module').then(mod=>mod.ReviewModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reviewer',
    loadChildren: () => import('./Rating_Review/reviewer/reviewer.module').then(mod=>mod.ReviewerModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ratesettings',
    loadChildren: () => import('./Rating_Review/settings-rating/setting-rating.module').then(mod=>mod.SettingRatingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usertypesettings',
    loadChildren: () => import('./Rating_Review/settings-usertype/setting-usertype.module').then(mod=>mod.SettingUsertypeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'roleandpermission',
    loadChildren: () => import('./Roles_permissions/Admin/admin-list.module').then(mod=>mod.AdminListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modulepermission',
    loadChildren: () => import('./Roles_permissions/roles/roles.module').then(mod=>mod.RolesModule),
    canActivate: [AuthGuard]
  },
  { path: '', component: AuthenticationComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
