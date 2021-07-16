import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksmithsforkComponent } from './blacksmithsfork.component';

describe('BlacksmithsforkComponent', () => {
  let component: BlacksmithsforkComponent;
  let fixture: ComponentFixture<BlacksmithsforkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacksmithsforkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacksmithsforkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
