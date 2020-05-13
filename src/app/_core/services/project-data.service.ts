import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  public projectData: Project[];

  constructor(private http: HttpClient) { }

  public async loadProjectData(): Promise<void> {

    try {
      this.projectData = await this.http.get<Project[]>('/data/projects').toPromise();
      console.log(this.projectData);
    } catch (e) {
      console.log(e);
    }



  }

}
