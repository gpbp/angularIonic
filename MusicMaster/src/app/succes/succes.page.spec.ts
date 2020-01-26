import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccesPage } from './succes.page';

describe('SuccesComponent', () => {
  let component: SuccesPage;
  let fixture: ComponentFixture<SuccesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
