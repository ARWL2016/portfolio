import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'app/app-component/app.component';
import { ProjectDataService } from 'app/services/project-data.service';
import { OverviewComponent } from './overview/overview.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PortfolioComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'overview', component: OverviewComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'skills', component: SkillsComponent },
      { path: '', redirectTo: 'skills', pathMatch: 'full' },
    ])
  ],
  providers: [
    ProjectDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
