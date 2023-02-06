import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { KundenComponent } from './components/kunden/kunden.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { LeadsApprovalComponent } from './components/leads-approval/leads-approval.component';
import { LeadsComponent } from './components/leads/leads.component';
import { ArticalsComponent } from './components/articals/articals.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LogoutComponent } from './components/logout/logout.component';

// material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AlertComponent } from './components/alert/alert.component';
import { TrialPeriodComponent } from './components/trial-period/trial-period.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    FilterComponent,
    KundenComponent,
    CompaniesComponent,
    LeadsApprovalComponent,
    LeadsComponent,
    ArticalsComponent,
    JobsComponent,
    LogoutComponent,
    FooterComponent,
    AlertComponent,
    TrialPeriodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // material imports
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
