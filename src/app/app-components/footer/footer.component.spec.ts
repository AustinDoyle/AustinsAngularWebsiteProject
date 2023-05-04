import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two icons', () => {
    const elements =
      fixture.debugElement.nativeElement.querySelectorAll('.footer-right a i');

    expect(elements.length).toBe(2);
  });

  it('should render linkedIn as the first icon', () => {
    const elements =
      fixture.debugElement.nativeElement.querySelectorAll('.footer-right a i');

    expect(elements[0].getAttribute('class')).toBe(component.linkedInIconClass);
  });

  it('should render github as the second icon', () => {
    const elements =
      fixture.debugElement.nativeElement.querySelectorAll('.footer-right a i');

    expect(elements[1].getAttribute('class')).toBe(component.githubIconClass);
  });

  it('should have the correct LinkedIn Link', () => {
    const element =
      fixture.debugElement.nativeElement.querySelectorAll('.footer-right a');
    expect(element[0].getAttribute('href')).toBe(component.linkedInURL);
  });

  it('should have the correct LinkedIn Link', () => {
    const element =
      fixture.debugElement.nativeElement.querySelectorAll('.footer-right a');
    expect(element[1].getAttribute('href')).toBe(component.githubURL);
  });
});
