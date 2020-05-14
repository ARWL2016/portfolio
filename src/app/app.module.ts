import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'app/app.component';
import { OverviewComponent } from './overview/overview.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { EmailComponent } from './email/email.component';


import { LogoComponent } from 'app/_shared/logo/logo.component';
import { HeaderComponent } from './_core/layout/header/header.component';
import { FooterComponent } from './_core/layout/footer/footer.component';
import { BannerComponent } from './overview/banner/banner.component';
import { SkillsSummaryComponent } from './overview/skills-summary/skills-summary.component';
import { FeaturedAppsComponent } from './overview/featured-apps/featured-apps.component';
import { SearchComponent } from './portfolio/search/search.component';
import { StatComponent } from './portfolio/stat/stat.component';
import { ButtonLinkComponent } from './_shared/button-link/button-link.component';
import { PortfolioBannerComponent } from './portfolio/portfolio-banner/portfolio-banner.component';
import { SkillsTableComponent } from './skills/skills-table/skills-table.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PortfolioComponent,
    SkillsComponent,
    EmailComponent,
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SkillsSummaryComponent,
    FeaturedAppsComponent,
    SearchComponent,
    StatComponent,
    ButtonLinkComponent,
    PortfolioBannerComponent,
    SkillsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
