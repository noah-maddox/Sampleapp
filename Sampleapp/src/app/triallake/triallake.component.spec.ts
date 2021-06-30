import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriallakeComponent } from './triallake.component';

describe('TriallakeComponent', () => {
  let component: TriallakeComponent;
  let fixture: ComponentFixture<TriallakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriallakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriallakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
