import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { pageTransition } from '../../animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  componentLoaded = '/overview';
  backgroundImage = 'url("../assets/splash-wide.png")';
  minHeight = '600px';


  constructor (private router: Router) {

  }

  // ngOnInit() {

  // }

  ngDoCheck() {
    console.log('DO CHECK');
    console.log(this.router.url);
    this.componentLoaded = this.router.url;
    console.log(this.componentLoaded);
    if (this.componentLoaded !== '/overview') {
      console.log('IFFFFFFF');
      this.backgroundImage = 'none';
      this.minHeight = '90px';
    } else {
      this.backgroundImage = 'url("../assets/splash-wide.png")';
      this.minHeight = '600px';
    }
    console.log(this.backgroundImage);
  }


}
