import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigcottonindianComponent } from './bigcottonindian.component';

describe('BigcottonindianComponent', () => {
  let component: BigcottonindianComponent;
  let fixture: ComponentFixture<BigcottonindianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigcottonindianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigcottonindianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
