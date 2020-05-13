import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OverviewComponent } from './overview.component';
import { Router } from '@angular/router';
import { ProjectDataService } from 'app/_core/services/project-data.service';

describe('OverviewComponent', () => {
  let comp: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;
  let projectDataService: ProjectDataService;
  let h1: HTMLElement;
  let bh: DebugElement;
  class RouterStub { navigateByUrl(url: string) { return url; }};
  const projectDataServiceStub = [{
    name: 'Book Exchange'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewComponent ],
      providers: [{ provide: Router, useClass: RouterStub }, {provide: ProjectDataService, use: projectDataServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    comp = fixture.componentInstance;
    projectDataService = fixture.debugElement.injector.get(ProjectDataService);
    bh = fixture.debugElement.query(By.css('.banner-header'));
    h1 = bh.nativeElement;
  });

  it('should create the overview component', () => {
    expect(comp).toBeTruthy();
  });

  it(`should have as username 'alistairrwillis'`, () => {
    // const app = fixture.debugElement.componentInstance;
    expect(comp.username).toEqual('alistairrwillis');
  });

  it(`should render a h1 banner-header of 'Full Stack Web Developer'`, () => {
    expect(h1.textContent).toEqual('Full Stack Web Developer');
  });


});
