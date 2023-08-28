import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SectionMenuComponent } from './components/section-menu/section-menu.component';
import { FooterOptionComponent } from './components/footer-option/footer-option.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { YearlySalesComponent } from './components/yearly-sales/yearly-sales.component';
import { SupportTicketComponent } from './components/support-ticket/support-ticket.component';
import { DashboardMembersComponent } from './components/dashboard-members/dashboard-members.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SectionMenuComponent,
    FooterOptionComponent,
    SalesReportComponent,
    YearlySalesComponent,
    SupportTicketComponent,
    DashboardMembersComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
