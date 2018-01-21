import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { ProjectDataService } from 'app/services/project-data.service';
import { Project } from 'app/services/project';
import { pageTransition } from '../../animations';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { PingService } from 'app/services/ping.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [pageTransition]
})
export class PortfolioComponent implements OnInit {

  // project data
  projectData: Project[] = [];
  get results(): number {
    return this.projectData.length;
  }

  // search
  searchTerm = new FormControl();

  // UI props
  showBackToTopIcon = false;

  constructor(private dataService: ProjectDataService, private ping: PingService) {
    this.createSearchListener();
  }

  ngOnInit() {
    this.getData();
    this.pingProjects();
  }

  private getData(): void {
    if (this.dataService.projectData) {
      this.projectData = this.dataService.projectData;
    } else {
      this.dataService.getProjectData()
        .then(data => {
          this.projectData = data;
          console.log(this.projectData);
      });
    }
  }

  private pingProjects(): void {
    if (!this.ping.pinged) {
      this.ping.pingProject();
    }
  }

  private createSearchListener(): void {
    this.searchTerm.valueChanges
    // .debounceTime(200)
      .subscribe(newValue => this.search());
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
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
