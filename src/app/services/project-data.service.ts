import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable()
export class ProjectDataService {

  projectData: Project[] = [
    {
      name: 'Book Exchange',
      tech: 'Angular 4.0, Typescript, MaterializeCSS, Node, Express, MongoDB, Mongoose, BCrypt, JSON Web Tokens',
      tags: `
        HTML, CSS, Javascript, Angular 4.0, Typescript, MaterializeCSS,
        Node, Express, MongoDB, Mongo, Mongoose, BCrypt, JSON Web Tokens,`,
      featured: true,
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
      highlights: [
        'UI implements progress bar, notifications, and background username check during registration',
        'MaterializeCSS used for navbar and form components, plus icons',
        'Google Books API basic searches need no API key so requests made from front end for speed',
        'three entity data structure: user, book and request',
        'Typescript interfaces used to enforce data structure on front end',
        'authentication implemented with Bcrypt password encryption and JSON Web Tokens added to HTTP headers',
        'REST api tested with Mocha and Expect, using Supertest for HTTP request mocking; separate test database with mock data',
        'data persisted using MongoDB cloud provider MLab'
      ],
      image_url: 'assets/book-exchange-min.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/book-trading-club',
      website_link: 'https://arwl-book-exchange.herokuapp.com/browse',
      page_speed_score: 91,
      page_size: 957,
      page_load_time: 4.19
    },
    {
      name: 'Votogo',
      tech: 'Angular 4.0, Typescript, Bootstrap, Node, Express, MongoDB, Mongoose',
      tags: 'HTML, CSS, Javascript, Angular 4.0, Typescript, Bootstrap, Node, Express, MongoDB, Mongo, Mongoose,',
      featured: true,
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
      highlights: [
        'CRUD application with RESTful API',
        'UI implemented using Bootstrap panels, buttons and navigation bar',
        'Angular animations module used for smoothing transitions during data requests',
        'Chart.js doughtnut chart implemented as Angular child component',
        'two entity data structure: users and votes persisted with MongoDB using Mongoose schema',
        'authentication module uses JSON Web Tokens to implement secure sessions'
      ],
      image_url: 'assets/votogo-sm.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/voting-app',
      website_link: 'https://votogo.herokuapp.com/home',
      page_speed_score: 91,
      page_size: 530,
      page_load_time: 4.11
    },
    {
      name: 'Stock Tracker',
      tech: 'AngularJS 1.6, CSS, Node, Express, MySQL, Chart.js',
      tags: 'HTML, CSS, Javascript, AngularJS 1.6, CSS, Node, Express, MySQL, Chart.js,',
      featured: true,
      summary: `
        Stock Tracker is an AngularJS application which charts time series data from the FTSE 100
        using the Quandl API. Data is cached once a day on a MySQL database, ensuring rapid load times.
        The back end is written in Node and Express.
        `,
      user_stories: `
        Stock tracking application which allows users to view stock data from the FTSE 100 over the last
        five years. Users can select and compare different stocks, and alter the timescale between three months
        and five years.
      `,
      highlights: [
        'custom UI built without CSS framework',
        'renders line graph from Chart.js using daily stock prices',
        'back end makes daily series of requests to Quandl API to update stock data',
        'data persisted on a MySQL database at JawsDB via Heroku'
      ],
      image_url: 'assets/stocko.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/stock-tracker',
      website_link: 'https://arwl-stock-tracker.herokuapp.com/main',
      page_speed_score: 0,
      page_size: 264,
      page_load_time: 3.35
    },
    {
      name: 'Portfolio',
      tech: 'CSS, Angular 4.0, Typescript, Express, Karma, Jasmine',
      tags: 'HTML, CSS, Javascript, CSS, Express, Angular, Karma, Jasmine',
      featured: false,
      summary: `

        `,
      user_stories: `
        Portfolio website that allows users to view projects, link to live sites
        and Github repos, and see a skills summary.

      `,
      highlights: [
        'responsive design created in native CSS and flexbox',
        'components and services tested with Karma and Jasmine',
        'angular/animations module used for smoother UI'
      ],
      image_url: 'assets/portfolio-1-min.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/portfolio',
      website_link: 'https://alistair-willis.herokuapp.com/overview',
      page_speed_score: 0,
      page_size: 1100,
      page_load_time: 4.36
    },
    {
      name: 'JS-Calculator',
      tech: 'HTML, Sass, ES6, Webpack',
      tags: 'HTML, CSS, Javascript, HTML, Sass, ES6, Webpack,',
      featured: false,
      summary: `
        This calculator was originally written in jQuery then refactored to native Javascript to reduce
        unnecessary dependencies. Webpack is used as a build tool to transpile ES6 and process the Sass stylesheets.
        The project is tested with Mocha and JSDom.
        `,
      user_stories: `
        Browser based calculator with basic arithmetic operators and a memory function. Operations can be chained
        and the correct order of operations will be followed. The interface uses a skeuomorphic design and
        permits keyboard or mouse input.
       `,
      highlights: [
        'custom UI design written in Sass with modular structure',
        'uses Webpack to transpile ES6 and Sass; code splitting produces separate CSS bundle',
        'DOM manipulation written in native Javascript; DOM selections cached for greater efficiency'],
      image_url: 'assets/calculator.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/js-calculator',
      website_link: 'https://calculator-arwl.herokuapp.com/',
      page_speed_score: 91,
      page_size: 56,
      page_load_time: 0.79
    },
    {
      name: 'Noughts and Crosses Game',
      tech: 'HTML, Sass, Javascript, JQuery, Babel, Webpack',
      tags: 'HTML, CSS, Javascript, Sass, ES6, JQuery, Babel, Webpack,',
      featured: true,
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
      highlights: [
        'JQuery and JQueryUI loaded via CDN',
        'CSS3 transition effects create smooth game experience',
        'Sass variables and color functions used to ensure consistent color design',
        'uses Webpack to transpile Javascript to ES5 and Sass to CSS'
      ],
      image_url: 'assets/tictactoe.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/nought-and-cross-app',
      website_link: 'https://arwl-noughts-and-crosses.herokuapp.com/',
      page_speed_score: 92,
      page_size: 185,
      page_load_time: 2.96
    },
    {
      name: 'Game of Life Simulation',
      tech: 'HTML, CSS, Foundation, Javascript, JQuery',
      tags: 'HTML, CSS, Javascript, Foundation, JQuery,',
      featured: true,
      summary: `
        This front end web application is an implementation of Conway's game of life using JQuery and Foundation.
        Users can start and stop the simulation, add and remove cells, and change the speed.
        `,
      user_stories: `
        This application is an implementation of Conway's Game of Life, a grid of cells which follow a
        few simple rules but produce complex and apparently life-life patterns. Users can start and stop
        the simulation, add and remove cells, and change the speed.
       `,
      highlights: [
        'uses JQuery methods for handling user events and DOM manipulation',
        'responsive navigation panel created with Foundation',
        'object literals used for code encapsulation'
        ],
      image_url: 'assets/game-of-life-min.png',
      image_order: 0,
      github_link: 'https://github.com/ARWL2016/game-of-life-jquery',
      website_link: 'https://arwl-game-of-life.herokuapp.com/',
      page_speed_score: 0,
      page_size: 73,
      page_load_time: 2.65
    }
  ];


  constructor() { }



}
