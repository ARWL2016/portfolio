import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'app/services/project-data.service';
import { Project } from 'app/services/project';
import { pageTransition } from '../../animations';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [pageTransition]
})
export class OverviewComponent implements OnInit {

  projectData: Project[];

  constructor(
    private _data: ProjectDataService
  ) { }

  ngOnInit() {
    console.log('overview loaded');
    this.projectData = this._data.projectData.filter(project => project.featured);
  }

}
