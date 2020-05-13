import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log()
  }

  public scrollTo() {
    document.querySelector('#contactForm').scrollIntoView({behavior: 'smooth' });
  }

}
