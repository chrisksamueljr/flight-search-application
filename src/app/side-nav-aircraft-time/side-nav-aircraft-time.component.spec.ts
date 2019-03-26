import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavAircraftTimeComponent } from './side-nav-aircraft-time.component';

describe('SideNavAircraftTimeComponent', () => {
  let component: SideNavAircraftTimeComponent;
  let fixture: ComponentFixture<SideNavAircraftTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavAircraftTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavAircraftTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
