import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectDataService } from 'app/services/project-data.service';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'overview', component: OverviewComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ])
  ],
  providers: [
    ProjectDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
