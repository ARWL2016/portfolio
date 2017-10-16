import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'app/services/project-data.service';
import { Project } from 'app/services/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projectData: Project[];

  constructor(
    private _data: ProjectDataService
  ) { }

  ngOnInit() {
    console.log('portfolio loaded');
    this.projectData = this._data.projectData;
  }

}
