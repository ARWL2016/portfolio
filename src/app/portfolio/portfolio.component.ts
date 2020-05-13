import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
export class PortfolioComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput', { static: true }) searchInputRef: ElementRef;

  public displayedProjects: Project[];
  public allProjects: Project[];

  // project data
  get projectData(): Project[] {
    return this.dataService.projectData;
  }

  get results(): number {
    return this.projectData.length;
  }

  // search
  public searchTerm = new FormControl();


  // UI props
  public showBackToTopIcon = false;
  public showDetails = false;

  constructor(
    private dataService: ProjectDataService,
    private ping: PingService) {
    this.createSearchListener();
  }

  ngOnInit(): void {
    this.displayedProjects = this.allProjects = this.dataService.projectData;
    this.pingProjects('primary');
  }

  ngAfterViewInit(): void {
    this.searchInputRef.nativeElement.focus();
  }

  public toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  private pingProjects(type: string): void {
    if (!this.ping.pinged[type]) {
      this.ping.postPing(type);
    }
  }

  private createSearchListener(): void {
    this.searchTerm.valueChanges
      .subscribe(newValue => this.search());
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

  private search(): void {
    const filter = this.searchTerm.value.trim().concat(',');
    this.displayedProjects = this.transform(this.allProjects, filter);
  }

  private transform(allProjects: Project[], filterBy: string): Project[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    if (filterBy) {
      return allProjects.filter(project => project.tags.toLocaleLowerCase().match(filterBy));
    }
    return allProjects;
  }
}
