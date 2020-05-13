import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectDataService } from 'app/_core/services/project-data.service';

@Component({
  selector: 'app-featured-apps',
  templateUrl: './featured-apps.component.html',
  styleUrls: ['./featured-apps.component.scss']
})
export class FeaturedAppsComponent implements OnInit {

  get projectData() {
    return (this.dataService.projectData || []).filter(project => project.featured === true);
  }

  constructor(
    private router: Router,
    private dataService: ProjectDataService,
  ) { }

  ngOnInit() {
    console.log('fa init', this.projectData);
  }

  public navigateTo(page): void {
    this.router.navigate([page]);
    this.scrollToTop();
  }

  public scrollToTop(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

}
