import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialPeriodComponent } from './trial-period.component';

describe('TrialPeriodComponent', () => {
  let component: TrialPeriodComponent;
  let fixture: ComponentFixture<TrialPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialPeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
