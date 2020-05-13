import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../_shared/animations';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [pageTransition]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
