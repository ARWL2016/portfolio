import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'app/_core/services/content.service';

@Component({
  selector: 'app-skills-table',
  templateUrl: './skills-table.component.html',
  styleUrls: ['./skills-table.component.scss']
})
export class SkillsTableComponent implements OnInit {

  @Input() skillsTable: Skill[];


  constructor() { }

  ngOnInit() {
  }

}
