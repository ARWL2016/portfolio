import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss']
})
export class ButtonLinkComponent implements OnInit {

  @Input() href: string;
  @Input() value: string;
  @Input() iconClass: string;

  constructor() { }

  ngOnInit() {
  }

}
