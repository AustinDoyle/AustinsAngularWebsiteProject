import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroContentComponent } from './intro-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('IntroContentComponent', () => {
  let component: IntroContentComponent;
  let fixture: ComponentFixture<IntroContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroContentComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Welcome" letters', () => {
    const compiled = fixture.nativeElement;
    const letters = compiled.querySelectorAll('.letter');

    expect(letters.length).toBe('Welcome'.length);

    letters.forEach((element, index) => {
      expect(element.textContent).toBe('Welcome'[index]);
    });
  });

  it('should render "welcome-intro" text', () => {
    const compiled = fixture.nativeElement;
    const welcomeIntro = compiled.querySelector('.welcome-intro');

    expect(welcomeIntro.textContent.trim()).toBe(
      'I believe that a strong Developer should be proficient in web development languages and technologies, have a good understanding of software testing principles and methodologies, and be capable of writing clean and maintainable code.'
    );
  });

  // #TODO: Fix animations test. Annotations is a private api and not a good solution.
  function getComponentAnimations(component: any): any[] | undefined {
    const componentDecorator = (component as any).__annotations__[0];
    return componentDecorator.animations;
  }

  it('should have animations', () => {
    const animations = getComponentAnimations(IntroContentComponent);

    expect(animations).toBeTruthy();
    expect(animations.length).toBe(3);
  });
});
