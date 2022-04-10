import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsTCodesComponent } from './obs-tcodes.component';

describe('ObsTCodesComponent', () => {
  let component: ObsTCodesComponent;
  let fixture: ComponentFixture<ObsTCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsTCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsTCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
