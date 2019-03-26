import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInfoBarComponent } from './flight-info-bar.component';

describe('FlightInfoBarComponent', () => {
  let component: FlightInfoBarComponent;
  let fixture: ComponentFixture<FlightInfoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightInfoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
