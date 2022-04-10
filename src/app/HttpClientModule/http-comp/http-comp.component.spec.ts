import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCompComponent } from './http-comp.component';

describe('HttpCompComponent', () => {
  let component: HttpCompComponent;
  let fixture: ComponentFixture<HttpCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
