import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { pageTransition } from '../../animations';

import { ProjectDataService } from '../services/project-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (
    private router: Router,
    private data: ProjectDataService
  ) {}

  ngOnInit() {
    this.data.getProjectData();
  }

  navigateTo(page) {
    this.router.navigate([page]);
    this.scrollToTop();
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }


}
