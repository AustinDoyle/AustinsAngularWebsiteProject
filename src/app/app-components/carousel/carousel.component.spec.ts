import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent],
    }).compileComponents();

    jasmine.clock().install();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    fixture.detectChanges();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with the first image', () => {
    expect(component.currentImageIndex).toBe(0);
  });

  it('should go to the next image', () => {
    component.nextImage();
    expect(component.currentImageIndex).toBe(1);
  });

  it('should go to the previous image', () => {
    component.currentImageIndex = 1;
    component.prevImage();
    expect(component.currentImageIndex).toBe(0);
  });

  it('should loop to the last image when going to the previous image from the first image', () => {
    component.currentImageIndex = 0;
    component.prevImage();
    expect(component.currentImageIndex).toBe(2);
  });

  it('should loop to the first image when going to the next image from the last image', () => {
    component.currentImageIndex = 2;
    component.nextImage();
    expect(component.currentImageIndex).toBe(0);
  });

  it('should initialize with the default interval', () => {
    expect(component.interval).toBe(5000);
  });

  it('should initialize with the default inactive delay', () => {
    expect(component.inactiveDelay).toBe(5000);
  });

  it('should stop automatic transition when prevImage is called', done => {
    const stopTransitionSpy = spyOn(component, 'stopTransition');
    component.prevImage();
    expect(stopTransitionSpy).toHaveBeenCalled();
    done();
  });

  it('should stop automatic transition when nextImage is called', done => {
    const stopTransitionSpy = spyOn(component, 'stopTransition');
    component.nextImage();
    expect(stopTransitionSpy).toHaveBeenCalled();
    done();
  });

  it('should restart automatic transition after inactive delay when nextImage is called', done => {
    const restartTransitionSpy = spyOn(component, 'restartTransition');
    component.nextImage();
    jasmine.clock().tick(component.inactiveDelay);
    expect(restartTransitionSpy).toHaveBeenCalled();
    done();
  });

  it('should stop automatic transition when ngOnDestroy is called', () => {
    const stopTransitionSpy = spyOn(component, 'stopTransition');
    component.ngOnDestroy();
    expect(stopTransitionSpy).toHaveBeenCalled();
  });

  it('should restart automatic transition after inactive delay when prevImage is called', done => {
    const restartTransitionSpy = spyOn(component, 'restartTransition');
    component.prevImage();
    jasmine.clock().tick(component.inactiveDelay);
    expect(restartTransitionSpy).toHaveBeenCalled();
    done();
  });

  it('should restart automatic transition after inactive delay when nextImage is called', fakeAsync(() => {
    const restartTransitionSpy = spyOn(component, 'restartTransition');
    component.nextImage();
    tick(component.inactiveDelay);
    expect(restartTransitionSpy).toHaveBeenCalled();
  }));
});
