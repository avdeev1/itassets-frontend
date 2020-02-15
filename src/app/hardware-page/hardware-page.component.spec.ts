import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwarePageComponent } from './hardware-page.component';

describe('HardwarePageComponent', () => {
  let component: HardwarePageComponent;
  let fixture: ComponentFixture<HardwarePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwarePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwarePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
