import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '../types/project';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

export interface SkillSummary {
  title: string;
  content: string;
  iconClass: string;
}

export interface SiteContent {
  projects: Project[];
  overview: {
    bannerTitle: string;
    bannerSubtitle: string;
    skillsSummary: SkillSummary[]
  };
  portfolio: {
    introduction: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contentSource: ReplaySubject<SiteContent>;
  public content: Observable<SiteContent>;

  constructor(private http: HttpClient) {
    this.contentSource = new ReplaySubject(1);
    this.content = this.contentSource.asObservable();
  }

  public async loadProjectData() {

    this.http.get<SiteContent>('/content').subscribe(content => {
      this.contentSource.next(content);
    });

  }

}
