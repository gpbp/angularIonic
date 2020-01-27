import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolfegePage } from './solfege.page';

describe('SolfegeComponent', () => {
  let component: SolfegePage;
  let fixture: ComponentFixture<SolfegePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolfegePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolfegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
