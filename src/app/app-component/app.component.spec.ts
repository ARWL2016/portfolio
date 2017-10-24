import {NO_ERRORS_SCHEMA, DebugElement} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  class RouterStub {
    navigateByUrl(url: string) { return url; }
  };
  let comp: AppComponent;
  let ta: DebugElement;
  let taArray: DebugElement[]
  let a1: HTMLElement;
  let a2: HTMLElement;
  let a3: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: Router, useClass: RouterStub }],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    ta = fixture.debugElement.query(By.css('.titlebar-anchor'));
    taArray = fixture.debugElement.queryAll(By.css('.titlebar-anchor'));
    a1 = ta.nativeElement;
    a2 = taArray[1].nativeElement;
    a3 = taArray[2].nativeElement;
  });

  it('should create the app component', () => {
    expect(comp).toBeTruthy();
  });

  it(`should render the first anchor tag with 'OVERVIEW'`, () => {
    expect(a1.textContent).toEqual('OVERVIEW');
  });

  it(`should render the second anchor tag with 'PORTFOLIO'`, () => {
    expect(a2.textContent).toMatch(/PORTFOLIO/);
  });

  it(`should render the third anchor tag with 'ABOUT ME'`, () => {
    expect(a3.textContent).toContain('ABOUT');
  });


  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h2').textContent).toContain('app works!');
  // }));
});
