import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Echart3Component } from './echart3.component';

describe('Echart3Component', () => {
  let component: Echart3Component;
  let fixture: ComponentFixture<Echart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Echart3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Echart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
