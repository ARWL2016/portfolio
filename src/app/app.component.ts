import { Component, OnInit } from '@angular/core';

import { ProjectDataService } from './_core/services/project-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (
    private data: ProjectDataService
  ) {}

  ngOnInit() {
    console.log('app component init')
    this.data.loadProjectData();
  }


}
