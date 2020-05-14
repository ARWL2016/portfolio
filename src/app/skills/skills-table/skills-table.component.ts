import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-table',
  templateUrl: './skills-table.component.html',
  styleUrls: ['./skills-table.component.scss']
})
export class SkillsTableComponent implements OnInit {

  public skills = [
    {
      category: 'Languages',
      professional: 'HTML, CSS, Sass, JavaScript (ES6), TypeScript, SQL',
      amateur: 'PHP'
    },
    {
      category: 'CSS Frameworks',
      professional: 'DevExtreme, AngularJS Material',
      amateur: 'Bootstrap, Foundation'
    },
    {
      category: 'Front End Frameworks',
      professional: 'Angular, AngularJS',
      amateur: 'React, Vue.js, jQuery'
    },
    {
      category: 'Server Side',
      professional: 'Node, Express',
      amateur: 'PHP'
    },
    {
      category: 'Data Layer',
      professional: 'PostgreSQL, Sequelize, MassiveJS',
      amateur: 'MySQL, MongoDB, Mongoose'
    },
    {
      category: 'Testing',
      professional: 'Jasmine',
      amateur: 'Mocha, Chai, Supertest'
    },
    {
      category: 'Version Control',
      professional: 'Git, GitHub, Bitbucket',
      amateur: ''
    },
    {
      category: 'Cloud',
      professional: 'AWS Lambda, AWS SES, AWS SQS',
      amateur: 'Heroku, MLab'
    },
    {
      category: 'Languages',
      professional: 'Visual Studio Code, Postman, pgAdmin, PHPStorm,',
      amateur: 'MySQL Workbench'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
