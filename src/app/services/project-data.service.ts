import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { Project } from './project';

@Injectable()
export class ProjectDataService {

  public projectData: Project[];

  constructor(private http: HttpClient) { }

  public async getProjectData(): Promise<Project[]> {

    try {
      this.projectData = await this.http.get<Project[]>('/data/projects').toPromise();
      return this.projectData;
    } catch (e) {
      console.log(e);
    }



  }

}
