import { Component, OnInit } from '@angular/core';

import { ContentService } from 'app/_core/services/content.service';
import { Project } from 'app/_core/types/project';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-featured-apps',
  templateUrl: './featured-apps.component.html',
  styleUrls: ['./featured-apps.component.scss']
})
export class FeaturedAppsComponent implements OnInit {

  public projects: Observable<Project[]>

  constructor(
    private contentService: ContentService,
  ) { }

  ngOnInit() {
    this.projects = this.contentService.content.pipe(
      filter(content => content !== null),
      map(content => content.projects.filter(p => p.featured === true))
    );
  }


}
