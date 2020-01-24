import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartitionPage } from './partition.page';

describe('PartitionPage', () => {
  let component: PartitionPage;
  let fixture: ComponentFixture<PartitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartitionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
