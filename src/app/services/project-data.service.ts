import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable()
export class ProjectDataService {

  projectData: Project[] = [
    {
      name: 'Book Exchange',
      tech: 'Angular 4.0, Typescript, MaterializeCSS, Node, Express, MongoDB, Mongoose, BCrypt, JSON Web Tokens, Google Books API',
      summary: `
        Book Exchange is a book trading application which allows authenticated users to search for books on the Google Books API,
        build a book collection, view other users' collections, and send and receive requests for books.
        This is a full stack application built on Angular 4.0, MaterializeCSS, Node, Express and MongoDB, and deployed on
        Heroku with data persistance in the cloud at MLab.
          `,
      user_stories: `
        Book Exchange is a book trading app which allows users to search data from the Google Books API and browse other users' books.
        Authenticated users can also create and manage their own book collection, make requests to other users, and see other users'
        requests. A messaging function is still to be implemented.
      `,
      discussion: ``,
      image_url: 'assets/votogo-sm.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/book-trading-club',
      website_link: 'https://arwl-book-exchange.herokuapp.com/browse',
      page_speed_score: 0
    },
    {
      name: 'Votogo',
      tech: 'Angular 4.0, Typescript, Bootstrap, Node, Express, MongoDB, Mongoose',
      summary: `
        Votogo is a full stack CRUD application that allows users to create,
        share and view the results of surveys. It is built with Angular, Node, Express and MongoDB
        and includes an authentication module using BCrypt.js for password encryption and JSON Web Tokens
        for secure sessions.
          `,
      user_stories: `
        Votogo is a full stack CRUD application that allows authenticated users to create,
        share and view the results of surveys. Topics can be serached by title, and voting results can be
        viewed in both table and chart format.
        `,
      discussion: ``,
      image_url: 'assets/votogo-sm.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/voting-app',
      website_link: 'https://votogo.herokuapp.com/home',
      page_speed_score: 0
    },
    {
      name: 'Stock Tracker',
      tech: 'AngularJS 1.6, Node, Express, MySQL, Chart.js',
      summary: `
        Stock Tracker is an AngularJS application which charts time series data from the FTSE 100
        using the Quandl API. Data is cached once a day on a MySQL database, ensuring rapid load times.
        The back end is written in Node and Express.
        `,
      user_stories: ``,
      discussion: ``,
      image_url: 'assets/stocko.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/stock-tracker',
      website_link: 'https://arwl-stock-tracker.herokuapp.com/main',
      page_speed_score: 0
    },
    {
      name: 'JS-Calculator',
      tech: 'HTML, Sass, ES6, Webpack',
      summary: `
        This calculator was originally written in jQuery then refactored to native Javascript to reduce
        unnecessary dependencies. Webpack is used as a build tool to transpile ES6 and process the Sass stylesheets.
        The project is tested with Mocha and JSDom.
        `,
      user_stories: `
        Browser based calculator with basic arithmetic operators and a memory function. Operations can be chained
        and the correct order of operations will be followed. The interface user_stories a skeuomorphic design which
        allows keyboard or mouse input.
       `,
      discussion: ``,
      image_url: 'assets/calculator.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/js-calculator',
      website_link: 'https://calculator-arwl.herokuapp.com/',
      page_speed_score: 0
    },
    {
      name: 'Noughts and Crosses Game',
      tech: 'HTML, Sass, ES6, JQuery, Babel, Webpack',
      summary: `
        This is a noughts-and-crosses implementation built with ES6, JQuery and Sass and using Webpack as a build tool
        to run the Babel compiler and process the style declarations to CSS. The algorithm consists of three general
        strategy functions augmented by a small number of hard-coded moves.
        `,
      user_stories: `
        This is a noughts-and-crosses implementation with an unbeatable AI. Users can play against the computer
        as O or X, play against another human, or watch a game between two computer players. The application will
        keep score until the players change sides.
       `,
      discussion: ``,
      image_url: 'assets/tictactoe.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/nought-and-cross-app',
      website_link: 'https://arwl-noughts-and-crosses.herokuapp.com/',
      page_speed_score: 0
    },
    {
      name: 'Noughts and Crosses Game',
      tech: 'HTML, Sass, ES6, JQuery, Babel, Webpack',
      summary: `
        This is a noughts-and-crosses implementation built with ES6, JQuery and Sass and using Webpack as a build tool
        to run the Babel compiler and process the style declarations to CSS. The algorithm consists of three general
        strategy functions augmented by a small number of hard-coded moves.
        `,
      user_stories: `
        This is a noughts-and-crosses implementation with an unbeatable AI. Users can play against the computer
        as O or X, play against another human, or watch a game between two computer players. The application will
        keep score until the players change sides.
       `,
      discussion: ``,
      image_url: 'assets/tictactoe.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/nought-and-cross-app',
      website_link: 'https://arwl-noughts-and-crosses.herokuapp.com/',
      page_speed_score: 0
    }
  ];

  constructor() { }



}
