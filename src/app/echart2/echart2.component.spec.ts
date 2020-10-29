import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Echart2Component } from './echart2.component';

describe('Echart2Component', () => {
  let component: Echart2Component;
  let fixture: ComponentFixture<Echart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Echart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Echart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
