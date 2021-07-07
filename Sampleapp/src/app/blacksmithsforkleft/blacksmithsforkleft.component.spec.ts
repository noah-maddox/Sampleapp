import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksmithsforkleftComponent } from './blacksmithsforkleft.component';

describe('BlacksmithsforkleftComponent', () => {
  let component: BlacksmithsforkleftComponent;
  let fixture: ComponentFixture<BlacksmithsforkleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacksmithsforkleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacksmithsforkleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
