import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;
  @Input() note: string;
  @Input() unit: string;

  constructor() { }

  ngOnInit() {
  }

}
