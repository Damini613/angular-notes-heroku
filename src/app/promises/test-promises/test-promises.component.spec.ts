import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPromisesComponent } from './test-promises.component';

describe('TestPromisesComponent', () => {
  let component: TestPromisesComponent;
  let fixture: ComponentFixture<TestPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPromisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
