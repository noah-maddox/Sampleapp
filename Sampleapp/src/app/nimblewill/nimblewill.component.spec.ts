import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NimblewillComponent } from './nimblewill.component';

describe('NimblewillComponent', () => {
  let component: NimblewillComponent;
  let fixture: ComponentFixture<NimblewillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NimblewillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NimblewillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
