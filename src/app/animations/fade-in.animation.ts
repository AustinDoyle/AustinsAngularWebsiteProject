import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

export const fadeInLefToRight = trigger('fadeInLeftToRight', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0 }),
            stagger('100ms', [
                animate('500ms', style({ opacity: 1 })),
            ]),
        ], { optional: true }),
    ]),
]);

export const slideUp = trigger('slideUp', [
  state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
  transition('void => *', [
    animate(500),
  ]),
]);