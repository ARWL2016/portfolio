import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { pageTransition } from '../../animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // componentLoaded = '/overview';
  // backgroundImage = 'url("../assets/splash-wide.png")';
  // minHeight = '600px';
  username = 'alistairrwillis';
  hostname = 'gmail.com';
  // private fragment: string;

  constructor (private router: Router) {

  }

  ngOnInit() {

  }

  navigateTo(page) {
    // window.scroll({top: 0, left: 0, behavior: 'smooth' });

    this.router.navigate([page]);
    this.scrollToTop();
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  // ngDoCheck() {
  //   this.componentLoaded = this.router.url;
  //   if (this.componentLoaded !== '/overview') {
  //     this.backgroundImage = 'none';
  //     this.minHeight = '90px';
  //   } else {
  //     this.backgroundImage = 'url("../assets/splash-wide.png")';
  //     this.minHeight = '600px';
  //   }
  // }


}
