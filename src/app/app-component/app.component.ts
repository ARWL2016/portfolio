import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { pageTransition } from '../../animations';

import { ProjectDataService } from '../services/project-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.header.scss', './app.component.footer.scss']
})
export class AppComponent implements OnInit {

  constructor (
    private router: Router,
    private data: ProjectDataService
  ) {}

  ngOnInit() {
    this.data.getProjectData();
  }

  public navigateTo(page): void {
    this.router.navigate([page]);
    this.scrollToTop();
  }

  public scrollToTop(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
