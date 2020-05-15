import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portfolio-banner',
  templateUrl: './portfolio-banner.component.html',
  styleUrls: ['./portfolio-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioBannerComponent implements OnInit {

  @Input() portfolioContent: any;

  public showDetails = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

}
