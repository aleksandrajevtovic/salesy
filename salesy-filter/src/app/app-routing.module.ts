import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticalsComponent } from './components/articals/articals.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilterComponent } from './components/filter/filter.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { KundenComponent } from './components/kunden/kunden.component';
import { LeadsApprovalComponent } from './components/leads-approval/leads-approval.component';
import { LeadsComponent } from './components/leads/leads.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'filter', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kunden', component: KundenComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'leads-approval', component: LeadsApprovalComponent },
  { path: 'leads', component: LeadsComponent },
  { path: 'articals', component: ArticalsComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
