import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsApprovalComponent } from './leads-approval.component';

describe('LeadsApprovalComponent', () => {
  let component: LeadsApprovalComponent;
  let fixture: ComponentFixture<LeadsApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadsApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
