import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewTabComponent } from './crew-tab.component';

describe('CrewTabComponent', () => {
  let component: CrewTabComponent;
  let fixture: ComponentFixture<CrewTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
