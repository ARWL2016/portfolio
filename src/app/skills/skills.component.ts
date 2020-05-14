import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { pageTransition } from '../_shared/animations';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [pageTransition],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  public skillsHTML = `
    <p>
      I'm a front end developer with a special interest in modular JavaScript libraries and frameworks.
      In my professional life, I work with AngularJS, but for personal projects, I have also used React, Vue and Angular 4.0.
    </p>
    <p>
    For styling, I've worked with with CSS frameworks like Bootstrap and AngularJS-Materialize, but I also enjoy the challenge of working in native CSS or Sass.
    I’m also familiar with various tools used in modern development, such as Webpack for module bundling, npm for package management and build scripts and Git / GitHub for version control.
    In my professional capacity, I've also used Sourcetree, Bitbucket and Jira to manage workflows.
    </p>
    <p>
    Front end development makes up about three quarters of my experience, but I've also done a fair amount of work in Node, especially using the Express framework and MongoDB.
    I've built RESTful APIs to support CRUD applications, and I’ve also implemented authentication modules both locally and using OAuth.
    I have some experience creating databases with MySQL and writing SQL queries.
    </p>
    <p>
    As a developer, I write code which is clean and concise yet readable, explicit and easy to maintain, making use of any language features that improve code clarity.
    I particularly value the new features of ES6, the type-checking capability of TypeScript and improved code structure made possible by using Sass.
    </p>
    <p>
      The table below shows the key technologies that I've professionally or in the apps featured on this site. Items in <b>bold</b> represent
      core proficiencies.
    </p>
  `;

  constructor() { }

  ngOnInit() {

  }

}
