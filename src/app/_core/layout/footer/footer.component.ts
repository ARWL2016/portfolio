import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateTo(page): void {
    this.router.navigate([page]);
    this.scrollToTop();
  }

  public scrollToTop(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

}
