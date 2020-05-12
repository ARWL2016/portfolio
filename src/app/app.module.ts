import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'app/app-component/app.component';
import { OverviewComponent } from './overview/overview.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { EmailComponent } from './email/email.component';

import { ProjectDataService } from 'app/services/project-data.service';
import { EmailService } from 'app/email/email.service';
import { PingService } from 'app/services/ping.service';
import { LogoComponent } from 'app/shared/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PortfolioComponent,
    SkillsComponent,
    EmailComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'overview', component: OverviewComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'skills', component: SkillsComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ])
  ],
  providers: [
    ProjectDataService,
    EmailService,
    PingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
