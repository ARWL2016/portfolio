import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  template: `
    <div class="logo-wrapper">
      <img class="titlebar-logo" src="../assets/logos/logo_blue.png" routerLink="/overview">
      <div class="logo-title">Front End Developer</div>
      <div class="logo-name">Alistair Willis</div>
    </div>
  `,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

}
