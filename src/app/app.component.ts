import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from "app/services/project-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  projectData: Object[];
  
  constructor (
    private _data: ProjectDataService
  ) {}

  ngOnInit() {
    console.log('app component');
    console.log(this._data.projectData ); 
    this.projectData = this._data.projectData;
  }
}
