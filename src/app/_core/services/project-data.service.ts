import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '../types/project';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  public projectData: Project[];

  private dataSource: BehaviorSubject<Project[]>;
  public data: Observable<Project[]>;

  constructor(private http: HttpClient) {
    this.dataSource = new BehaviorSubject(null);
    this.data = this.dataSource.asObservable();
  }

  public async loadProjectData(): Promise<void> {

    try {
      this.projectData = await this.http.get<Project[]>('/data/projects').toPromise();


      this.dataSource.next(this.projectData);

      console.log(this.projectData);
    } catch (e) {
      console.log(e);
    }



  }

}
