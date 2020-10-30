import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Echart5Component } from './echart5.component';

describe('Echart5Component', () => {
  let component: Echart5Component;
  let fixture: ComponentFixture<Echart5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Echart5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Echart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
