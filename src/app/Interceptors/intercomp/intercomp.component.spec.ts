import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercompComponent } from './intercomp.component';

describe('IntercompComponent', () => {
  let component: IntercompComponent;
  let fixture: ComponentFixture<IntercompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntercompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
