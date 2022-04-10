import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOutComponent } from './parent-out.component';

describe('ParentOutComponent', () => {
  let component: ParentOutComponent;
  let fixture: ComponentFixture<ParentOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
