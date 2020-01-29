import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstrumentsPianoPage } from './instruments-piano.page';

describe('InstrumentsPianoPage', () => {
  let component: InstrumentsPianoPage;
  let fixture: ComponentFixture<InstrumentsPianoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentsPianoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstrumentsPianoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
