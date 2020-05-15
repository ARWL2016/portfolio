import { Component, OnInit, HostListener } from '@angular/core';

import { ContentService, SiteContent } from 'app/_core/services/content.service';
import { Project } from 'app/_core/types/project';
import { pageTransition } from '../_shared/animations';
import { PingService } from 'app/_core/services/ping.service';
import { filter, take } from 'rxjs/operators';

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
  public portfolioContent: any;

  public showBackToTopIcon = false;

  constructor(
    private contentService: ContentService,
    private pingSvc: PingService
    ) {
  }

  ngOnInit(): void {
    this.scrollToTop();
    this.pingSvc.ping('primary');

    this.contentService.content.pipe(
      filter(content => content !== null),
      take(1),
    ).subscribe((content: SiteContent) => {
      this.displayedProjects = this.allProjects = content.projects;
      this.portfolioContent = content.portfolio;
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.scrollY > 2000) {
      this.pingSvc.ping('secondary');
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
