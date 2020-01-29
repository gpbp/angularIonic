import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstrumentsGuitarePage } from './instruments-guitare.page';

describe('InstrumentsGuitarePage', () => {
  let component: InstrumentsGuitarePage;
  let fixture: ComponentFixture<InstrumentsGuitarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentsGuitarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstrumentsGuitarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
