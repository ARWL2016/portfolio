import { Component, OnInit, HostListener } from '@angular/core';

import { pageTransition } from '../_shared/animations';
import { PingService } from 'app/_core/services/ping.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [pageTransition]
})
export class OverviewComponent implements OnInit {

  constructor(
    private ping: PingService
  ) { }

  ngOnInit() {

  }


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.ping.pinged.primary && window.scrollY > 400) {
      this.ping.postPing('primary');
    }
  }




}
