import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-banner',
  templateUrl: './portfolio-banner.component.html',
  styleUrls: ['./portfolio-banner.component.scss']
})
export class PortfolioBannerComponent implements OnInit {

  public showDetails = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

}
