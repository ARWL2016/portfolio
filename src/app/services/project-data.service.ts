import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDataService {

  projectData = [
    {
      name: 'Votogo',
      tech: 'Angular 4.0, Typescript, Bootstrap, Node, Express, MongoDB, Mongoose',
      summary: `
        Votogo is a full stack CRUD application that allows users to create,
        share and view the results of surveys. It is built with Angular, Node, Express and MongoDB
        and includes an authentication module using BCrypt.js for password encryption and JSON Web Tokens
        for secure sessions.
          `,
      features: `Votogo is a full stack CRUD application that allows users to create,
        share and view the results of surveys.`,
      discussion: ``,
      image_url: 'assets/votogo-sm.png',
      image_order: 0
    },
    {
      name: 'Stock Tracker',
      tech: 'AngularJS 1.6, Node, Express, MySQL, Chart.js',
      summary: `
        Stock Tracker is an AngularJS application which charts time series data from the FTSE 100
        using the Quandl API. Data is cached once a day on a MySQL database, ensuring rapid load times.
        The back end is written in Node and Express.
        `,
      features: ``,
      discussion: ``,
      image_url: 'assets/stocko.png',
      image_order: 0
    },
    {
      name: 'JS-Calculator',
      tech: 'HTML, Sass, ES6, Webpack',
      summary: `
        This calculator was originally written in jQuery then refactored to native Javascript to reduce
        unnecessary dependencies. Webpack is used as a build tool to transpile ES6 and process the Sass stylesheets.
        The project is tested with Mocha and JSDom.
        `,
      features: `
        Browser based calculator with basic arithmetic operators and a memory function. Operations can be chained
        and the correct order of operations will be followed. The interface features a skeuomorphic design which
        allows keyboard or mouse input.
       `,
      discussion: ``,
      image_url: 'assets/calculator.png',
      image_order: 0
    }
  ];

  constructor() { }



}
