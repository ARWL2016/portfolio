import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDataService {

  constructor() { }

  projectData = [
    {
      name: 'Votogo', 
      short_description: 'Votogo is a free voting app that allows users to create, share and view the results of surveys. It is built with Angular, Node, Express and MongoDB.',
      image_url: 'assets/votogo-sm.png', 
      image_order: 0
    }
  ]; 

  

}
