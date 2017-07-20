import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'app/services/project-data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  projectData: Object[];
  constructor(
    private _data: ProjectDataService
  ) { }

  ngOnInit() {
    console.log('overview loaded');
    this.projectData = this._data.projectData;
  }

}
