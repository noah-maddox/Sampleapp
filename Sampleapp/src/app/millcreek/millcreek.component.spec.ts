import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillcreekComponent } from './millcreek.component';

describe('MillcreekComponent', () => {
  let component: MillcreekComponent;
  let fixture: ComponentFixture<MillcreekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MillcreekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MillcreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
