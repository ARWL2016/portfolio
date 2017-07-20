import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  view = 'dfd';
  backgroundImage = 'url("../assets/splash-wide.png")';
  minHeight = '600px';

  constructor () {}

  ngOnInit() {
    if (this.view !== 'overview') {
      // this.backgroundImage = 'none';
      this.minHeight = '350px';
    }
  }
}
