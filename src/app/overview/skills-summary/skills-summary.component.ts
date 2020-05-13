import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-summary',
  templateUrl: './skills-summary.component.html',
  styleUrls: ['./skills-summary.component.scss']
})
export class SkillsSummaryComponent implements OnInit {

  public skillsSummary = [
    {
      title: 'Fluid Design',
      content: 'Using front end libraries such as Bootstrap and Foundation, as well as custom CSS written in a maintainable style with Sass, I create web applications with responsive and intuitive user interfaces.',
      iconClass: 'fa fa-laptop'
    },
    {
      title: 'Modern Libraries',
      content: 'As well as JavaScript and jQuery, I utilize modern, component-based libraries such as Angular, React and Vue to build modular web applications which are quick to develop and highly performant.',
      iconClass: 'fa fa-industry'
    },
    {
      title: 'Full Stack Experience',
      content: 'Using JavaScript based back end technologies such as Node, Express and MongoDB, I\'ve built RESTful APIs and authentication modules. I\'ve also worked with MySQL, PHP and C#.',
      iconClass: 'fa fa-server'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
