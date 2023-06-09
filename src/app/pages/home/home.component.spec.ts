import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ToolbarComponent } from 'src/app/app-components/toolbar/toolbar.component';
import { IntroContentComponent } from 'src/app/app-components/intro-content/intro-content.component';
import { TwoColumnImageTextComponent } from 'src/app/app-components/two-column-image-text/two-column-image-text.component';
import { CarouselComponent } from 'src/app/app-components/carousel/carousel.component';
import { FooterComponent } from 'src/app/app-components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ToolbarComponent,
        IntroContentComponent,
        TwoColumnImageTextComponent,
        CarouselComponent,
        FooterComponent,
      ],
      imports: [BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have intro content component', () => {
    const element =
      fixture.debugElement.nativeElement.querySelector('app-intro-content');

    expect(element).toBeTruthy();
  });

  it('should have two column image and text component', () => {
    const element = fixture.debugElement.nativeElement.querySelector(
      'app-two-column-image-text'
    );

    expect(element).toBeTruthy();
  });

  it('should have carousel component', () => {
    const element =
      fixture.debugElement.nativeElement.querySelector('app-carousel');

    expect(element).toBeTruthy();
  });
});
