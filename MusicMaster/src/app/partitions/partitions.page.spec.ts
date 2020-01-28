import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartitionsPage } from './partitions.page';

describe('PartitionsPage', () => {
  let component: PartitionsPage;
  let fixture: ComponentFixture<PartitionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartitionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartitionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
