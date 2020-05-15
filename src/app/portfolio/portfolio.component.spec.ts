import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio.component';
import { ContentService } from 'app/_core/services/content.service';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let projectData: ContentService;
  let projectDataServiceStub: any;
  let rp: DebugElement;
  let p: HTMLElement;

  beforeEach(async(() => {
    projectDataServiceStub = [{
      name: 'Book Exchange'
    }];
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ PortfolioComponent ],
      providers: [{ provide: ContentService, use: projectDataServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('results should be undefined', () => {
    expect(component.results).toBeFalsy();
  });



});
