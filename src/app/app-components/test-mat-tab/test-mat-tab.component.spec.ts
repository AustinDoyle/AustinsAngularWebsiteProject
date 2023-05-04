import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatTabComponent } from './test-mat-tab.component';

describe('TestMatTabComponent', () => {
  let component: TestMatTabComponent;
  let fixture: ComponentFixture<TestMatTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMatTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMatTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
