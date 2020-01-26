import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccesprogressionPage } from './succesprogression.page';

describe('SuccesprogressionComponent', () => {
  let component: SuccesprogressionPage;
  let fixture: ComponentFixture<SuccesprogressionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesprogressionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccesprogressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
