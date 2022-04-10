import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpNotesComponent } from './http-notes.component';

describe('HttpNotesComponent', () => {
  let component: HttpNotesComponent;
  let fixture: ComponentFixture<HttpNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
