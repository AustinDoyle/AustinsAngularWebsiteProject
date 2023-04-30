import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { IntroContentComponent } from './app-components/intro-content/intro-content.component';
import { ToolbarComponent } from './app-components/toolbar/toolbar.component';
import { CarouselComponent } from './app-components/carousel/carousel.component';
import { FooterComponent } from './app-components/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        IntroContentComponent,
        CarouselComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule
      ]
      // ADD ROUTER TESTING MODULE
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Austin Doyle');
  // });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('app app is running!');
  });
});
