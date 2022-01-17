import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationexampleComponent } from './interpolationexample.component';

describe('InterpolationexampleComponent', () => {
  let component: InterpolationexampleComponent;
  let fixture: ComponentFixture<InterpolationexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
