import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerPageComponent } from './computer-page.component';

describe('ComputerPageComponent', () => {
  let component: ComputerPageComponent;
  let fixture: ComponentFixture<ComputerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
