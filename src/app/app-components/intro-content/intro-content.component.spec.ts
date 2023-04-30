import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroContentComponent } from './intro-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('IntroContentComponent', () => {
  let component: IntroContentComponent;
  let fixture: ComponentFixture<IntroContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroContentComponent],
      imports: [BrowserAnimationsModule]
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
