import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoontootlaComponent } from './noontootla.component';

describe('NoontootlaComponent', () => {
  let component: NoontootlaComponent;
  let fixture: ComponentFixture<NoontootlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoontootlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoontootlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
