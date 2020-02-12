import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftPageComponent } from './soft-page.component';

describe('SoftPageComponent', () => {
  let component: SoftPageComponent;
  let fixture: ComponentFixture<SoftPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
