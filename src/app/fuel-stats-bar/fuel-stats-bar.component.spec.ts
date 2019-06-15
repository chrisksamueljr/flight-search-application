import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelStatsBarComponent } from './fuel-stats-bar.component';

describe('FuelStatsBarComponent', () => {
  let component: FuelStatsBarComponent;
  let fixture: ComponentFixture<FuelStatsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelStatsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelStatsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
