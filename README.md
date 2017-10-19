## Portfolio 


#### To do 
- create the footer 
- add the portfolio page and model a single card 

#### About this Project 
This project is a portfolio website created to showcase my personal web development projects and document my technical skills. 

#### Technology 
- Angular 4.0.0 using Typescript 2.2.0 
- Created with the Angular CLI 
- Styling written in Sass and using flexbox to create a responsive layout 
- Code style is written in accordance with the Angular CLI default TSLint configuration 

### Methodology: Content Management
- Content: For ease of editing this webpage, the written content is stored in an Angular data service and loaded into the webpage dymanically at runtime. 
For the sake of quick loading, the data is stored on the client side. However, post deployment, it may be preferable to move the data
to the server so that the website can be edited without redeployment. Alternatively, a client side content management system can be implemented. 

### Methodology 2: Modular Styling
- Styles: Since Angular is a component based framework, it was decided to implement styles using a modular approach. This means using the module 
and scoping capabilities of the Sass preprocessor to define style rules in the most appropriate place. A global stylesheet defines a few 
universal rules, such as the font, the background color, and a limited number of resets to ease the design process. At the component level, css 
rules are defined in a flat style. This means that each element is given a single class name and as far as possible, all style rules are written 
using this classname and without complex selectors. In addition, class names are written using the BEM method, but with a slightly altered syntax. 
The purpose of these practices is to bring clarity, simplcity and maintainability to stylesheets. In addition, DRY principles are followed by 
extracting common sets of css rules to Sass mixins, and using variables for repeated properties. These mixins and variables are then extracted to 
an application level variables.scss file which acts like a style configuration file. In this way, styles for the whole website can be changed 
in a single location. 


"@angular/cli": "1.0.1",


<p>
    For full stack web application projects, I now use some variation of the MEAN stack: Angular, Node, Express
    and MongoDB or MySQL. Angular's component-based architecture and the separation of concerns between view, model
    and services makes it possible to develop and maintain applications in a modular style. Plus, the comprehensive
    nature of the Angular platform means that most common application features are available out of the box.
    I have also experimented with React and build a couple of small applications. However, I believe that Angular's
    template model is more intuitive and cleaner than React's JSX syntax.
  </p>
  <p>
    Before gravitating toward Angular, I built several front end projects using JQuery and JQueryUI. It is a convenient
    library for simple front end applications, particularly ones which need a lot of DOM manipulation and UI effects.
    However, the use cases for JQuery are probably getting fewer every day, thanks to more standardized web browsers,
    CSS3 animation features, and the advent of Single Page Applications.
  </p>
  <p>
    When it comes to front end styling and components, I find that using a CSS framework such as Bootstrap, Foundation
    or MaterializeCSS can save a lot of development time and make it possible to prototype decent looking and responsive
    applications quite quickly. However, these frameworks can produce very generic looking applications, and sometimes
    clash unpredicatably with custom styles.
  </p>
  <p>When it comes to front end design, I strive to build applications </p>
