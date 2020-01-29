import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstrumentsBatteriePage } from './instruments-batterie.page';

describe('InstrumentsBatteriePage', () => {
  let component: InstrumentsBatteriePage;
  let fixture: ComponentFixture<InstrumentsBatteriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentsBatteriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstrumentsBatteriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
