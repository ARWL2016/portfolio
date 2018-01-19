import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { ProjectDataService } from 'app/services/project-data.service';
import { Project } from 'app/services/project';
import { pageTransition } from '../../animations';
import { FormControl } from '@angular/forms';
import { DOCUMENT } from "@angular/platform-browser";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [pageTransition]
})
export class PortfolioComponent implements OnInit {
  projectData: Project[] = [];
  // searchTerm: string;
  searchTerm = new FormControl();
  results: number;

  showBackToTopIcon = false;

  constructor(
    private dataService: ProjectDataService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    console.clear();
    console.log('portfolio loaded');
    if (this.dataService.projectData) {
      this.projectData = this.dataService.projectData;
      this.results = this.projectData.length;
    } else {
      this.dataService.getProjectData()
        .then(data => {
          this.projectData = data;
          console.log(this.projectData);
          this.results = this.projectData.length;
      });
    }

    this.searchTerm.valueChanges
      // .debounceTime(200)
      .subscribe(newValue => {
        this.search();
    });

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

  search() {
    const filter = this.searchTerm.value.trim().concat(',');
    this.projectData = this.transform(this.dataService.projectData, filter);
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
