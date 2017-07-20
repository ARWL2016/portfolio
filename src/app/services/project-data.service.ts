import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDataService {

  projectData = [
    {
      name: 'Votogo',
      short_description: `
        Votogo is a full stack CRUD application that allows users to create,
        share and view the results of surveys. It is built with Angular, Node, Express and MongoDB
        and includes an authentication module using BCrypt.js for password encryption and JSON Web Tokens
        for secure sessions
          `,
      image_url: 'assets/votogo-sm.png',
      image_order: 0
    },
    {
      name: 'Stock Tracker',
      short_description: `
        Stock Tracker is an AngularJS application which charts time series data from the FTSE 100
        using the Quandl API. Data is cached once a day on a MySQL database, ensuring rapid load times.
        The back end is written in Node and Express.
        `,
      image_url: 'assets/stocko.png',
      image_order: 2
    },
    {
      name: 'Calculator',
      short_description: `
        This calculator was originally written in jQuery then refactored to native Javascript to reduce
        unnecessary dependencies. Webpack is used as a build tool to transpile ES6 and process the Sass stylesheets.
        The project is tested with Mocha and JSDom.
        `,
      image_url: 'assets/calculator.png',
      image_order: 0
    }
  ];

  constructor() { }



}
