import { Component, OnInit, DoCheck } from '@angular/core';
import { ProjectDataService } from 'app/services/project-data.service';
import { Project } from 'app/services/project';
import { pageTransition } from '../../animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [pageTransition]
})
export class OverviewComponent implements OnInit {

  projectData: Project[];
  username = 'alistairrwillis';
  hostname = 'gmail.com';

  constructor(
    private dataService: ProjectDataService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('overview loaded');
    console.log('OVERVIEW', this.dataService.projectData);

    if (this.dataService.projectData) {
      this.projectData = this.dataService.projectData.filter(project => project.featured);
    } else {
      this.dataService.getProjectData()
        .then(data => {
          this.projectData = data.filter(project => project.featured);
      });
    }

  }

  navigateTo(page) {
    this.router.navigate([page]);
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  // ngDoCheck() {
  //   console.log('OVERVIEW DO CHECK', this.data.projectData);
  // }

}
