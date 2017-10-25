import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SkillsComponent } from './skills.component';
import { DebugElement } from "@angular/core";

describe('SkillsComponent', () => {
  let comp: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let skillsHeading: DebugElement;
  let h3: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    comp = fixture.componentInstance;
    skillsHeading = fixture.debugElement.query(By.css('h2.skills-heading'));
    h3 = skillsHeading.nativeElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(comp).toBeTruthy();
  });

  it(`should render a h3 heading of 'ABOUT ME'`, () => {
    expect(h3.textContent).toEqual('ABOUT ME');
  });
});
