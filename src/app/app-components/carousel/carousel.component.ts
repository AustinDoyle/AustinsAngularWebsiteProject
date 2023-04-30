import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() interval = 5000;
  currentImageIndex = 0;
  private destroyed$ = new Subject<void>();
  inactiveDelay = 5000;
  resetTimer: any;

  ngOnInit(): void {
    this.startTransition();
  }

  startTransition(): void {
    timer(0, this.interval)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length;
      });
  }

  prevImage(): void {
    this.stopTransition();
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.restartTransition();
  }

  nextImage(): void {
    this.stopTransition();
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.restartTransition();
  }

  stopTransition(): void {
    clearTimeout(this.resetTimer);
    this.destroyed$.next();
  }

  restartTransition(): void {
    this.resetTimer = setTimeout(() => {
      this.startTransition();
    }, this.inactiveDelay);
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }
}
