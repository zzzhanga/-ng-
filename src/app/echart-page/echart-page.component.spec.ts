import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartPageComponent } from './echart-page.component';

describe('EchartPageComponent', () => {
  let component: EchartPageComponent;
  let fixture: ComponentFixture<EchartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
