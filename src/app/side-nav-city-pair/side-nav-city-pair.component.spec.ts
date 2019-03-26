import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavCityPairComponent } from './side-nav-city-pair.component';

describe('SideNavCityPairComponent', () => {
  let component: SideNavCityPairComponent;
  let fixture: ComponentFixture<SideNavCityPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavCityPairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavCityPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
