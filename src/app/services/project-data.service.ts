import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Project } from './project';

@Injectable()
export class ProjectDataService {

  public projectData: Project[];

  constructor(private http: Http) { }

  public getProjectData(): Promise<Project[]> {
    return this.http.get('/data/projects')
      .map(res => res.json())
      .toPromise()
        .then(data => {
          this.projectData = data;
          return data;
        })
        .catch(err => console.log(err));
  }

}
