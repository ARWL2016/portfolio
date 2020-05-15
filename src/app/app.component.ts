import { Component, OnInit } from '@angular/core';

import { ContentService } from './_core/services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (
    private data: ContentService
  ) {}

  ngOnInit() {
    console.log('app component init')
    this.data.loadProjectData();
  }


}
