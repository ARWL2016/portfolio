import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'app/services/project-data.service';
import { Project } from 'app/services/project';
import { pageTransition } from '../../animations';
import { ActivatedRoute, Router } from '@angular/router';

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
  private fragment: string;

  constructor(
    private dataService: ProjectDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // fetch project data
    if (this.dataService.projectData) {
      this.projectData = this.dataService.projectData.filter(project => project.featured);
    } else {
      this.dataService.getProjectData()
        .then(data => {
          this.projectData = data.filter(project => project.featured);
      });
    }
  }

  public goTo() {
    document.querySelector('#contactForm').scrollIntoView({behavior: 'smooth' });
    // this.router.navigate( ['/overview', ], {fragment: 'contactForm'});
  }

  public navigateTo(page): void {
    this.router.navigate([page]);
    this.scrollToTop();
  }

  public scrollToTop(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }


}
