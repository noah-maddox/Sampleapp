import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirescreekComponent } from './firescreek.component';

describe('FirescreekComponent', () => {
  let component: FirescreekComponent;
  let fixture: ComponentFixture<FirescreekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirescreekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirescreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
