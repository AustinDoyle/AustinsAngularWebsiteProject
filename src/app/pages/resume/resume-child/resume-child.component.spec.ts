import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeChildComponent } from './resume-child.component';

describe('ResumeChildComponent', () => {
  let component: ResumeChildComponent;
  let fixture: ComponentFixture<ResumeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
