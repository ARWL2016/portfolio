import { Component, OnInit, HostListener } from '@angular/core';

import { ProjectDataService } from 'app/_core/services/project-data.service';
import { Project } from 'app/_core/types/project';
import { pageTransition } from '../_shared/animations';
import { PingService } from 'app/_core/services/ping.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [pageTransition]
})
export class PortfolioComponent implements OnInit {

  public displayedProjects: Project[];
  public allProjects: Project[];
  public searchResultsCount = 0;

  public showBackToTopIcon = false;
  public showDetails = false;

  constructor(
    private dataService: ProjectDataService,
    private ping: PingService
    ) {
  }

  ngOnInit(): void {

    this.pingProjects('primary');

    this.dataService.data.subscribe((data: Project[]) => {
      this.displayedProjects = this.allProjects = this.dataService.projectData;
    })
  }

  public toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  private pingProjects(type: string): void {
    if (!this.ping.pinged[type]) {
      this.ping.postPing(type);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.scrollY > 2000) {
      this.pingProjects('secondary');
    }

    if (window.scrollY > 1000) {
      this.showBackToTopIcon = true;
    } else {
      this.showBackToTopIcon = false;
    }
  }

  public scrollToTop(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  public onSearchValueChanged(searchTerm: string): void {
    const filter = searchTerm.trim().concat(',');
    this.displayedProjects = this.transform(this.allProjects, filter);

    this.searchResultsCount = this.displayedProjects.length;
  }

  private transform(allProjects: Project[], filterBy: string): Project[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    if (filterBy) {
      return allProjects.filter(project => project.tags.toLocaleLowerCase().match(filterBy));
    }
    return allProjects;
  }
}
