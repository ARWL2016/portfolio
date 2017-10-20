import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'app/services/project-data.service';
import { Project } from 'app/services/project';
import { pageTransition } from '../../animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projectData: Project[];
  searchTerm: string;
  results: number;

  constructor(
    private _data: ProjectDataService
  ) { }

  ngOnInit() {
    console.log('portfolio loaded');
    this.projectData = this._data.projectData;
    this.results = this.projectData.length;
  }

  search() {
    const filter = this.searchTerm.trim().concat(',');
    this.projectData = this.transform(this._data.projectData, filter);
    this.results = this.projectData.length;
  }

  transform(allProjects: Project[], filterBy: string): Project[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    if (filterBy) {
      return allProjects.filter(project => project.tags.toLocaleLowerCase().match(filterBy));
    }
    return allProjects;

  }

}
