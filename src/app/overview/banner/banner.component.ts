import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {

  @Input() overview: any;

  constructor() { }

  public scrollTo() {
    document.querySelector('#contactForm').scrollIntoView({ behavior: 'smooth' });
  }

}
