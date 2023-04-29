import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroContentComponent } from './intro-content.component';

describe('IntroContentComponent', () => {
  let component: IntroContentComponent;
  let fixture: ComponentFixture<IntroContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
