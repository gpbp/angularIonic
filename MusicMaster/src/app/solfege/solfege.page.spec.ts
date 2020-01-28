import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {SolfegeComponent} from './solfege.component';

describe('SolfegeComponent', () => {
  let component: SolfegeComponent;
  let fixture: ComponentFixture<SolfegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolfegeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolfegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
