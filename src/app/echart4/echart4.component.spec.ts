import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Echart4Component } from './echart4.component';

describe('Echart4Component', () => {
  let component: Echart4Component;
  let fixture: ComponentFixture<Echart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Echart4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Echart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
