import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProjectDataService } from 'app/services/project-data.service';
import { Project } from 'app/services/project';
import { pageTransition } from '../../animations';
import { FormControl } from '@angular/forms';
import { PingService } from 'app/services/ping.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [pageTransition]
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  // project data
  projectData: Project[] = [];
  get results(): number {
    return this.projectData.length;
  }

  // search
  searchTerm = new FormControl();
  @ViewChild('searchInput')
  searchInputRef: ElementRef;

  // UI props
  showBackToTopIcon = false;
  showDetails = false;

  constructor(private dataService: ProjectDataService, private ping: PingService) {
    this.createSearchListener();
  }

  ngOnInit(): void {
    this.getData();
    this.pingProjects('primary');
  }

  ngAfterViewInit(): void {
    this.searchInputRef.nativeElement.focus();
  }

  private getData(): void {
    if (this.dataService.projectData) {
      this.projectData = this.dataService.projectData;
    } else {
      this.dataService.getProjectData()
        .then(data => {
          this.projectData = data;
      });
    }
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
    this.projectData = this.transform(this.dataService.projectData, filter);
  }

  private transform(allProjects: Project[], filterBy: string): Project[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    if (filterBy) {
      return allProjects.filter(project => project.tags.toLocaleLowerCase().match(filterBy));
    }
    return allProjects;
  }
}
