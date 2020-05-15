import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { pageTransition } from '../_shared/animations';
import { ContentService, SiteContent } from 'app/_core/services/content.service';
import { filter, take, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [pageTransition],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  public skills$: Observable<any>;

  constructor(
    private contentService: ContentService,
  ) { }

  ngOnInit() {
    this.skills$ = this.contentService.content.pipe(
      take(1),
      map(content => content.skills),
      tap(a => console.log(a))
    );
  }

}
