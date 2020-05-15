import { Component, OnInit, HostListener } from '@angular/core';

import { pageTransition } from '../_shared/animations';
import { PingService } from 'app/_core/services/ping.service';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ContentService } from 'app/_core/services/content.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [pageTransition]
})
export class OverviewComponent implements OnInit {

  public overview$: Observable<any>;

  constructor(
    private pingSvc: PingService,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.overview$ = this.contentService.content.pipe(
      // filter(content => content !== null),
      map(content => content.overview),
      tap(a => console.log(a))
    )
  }


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.scrollY > 400) {
      this.pingSvc.ping('primary');
    }
  }




}
