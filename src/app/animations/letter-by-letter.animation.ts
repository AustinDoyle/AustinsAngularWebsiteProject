import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';

/*
Quick walkthrough for future reference:
- trigger('{name}', []) creates animation trigger of specific name to bind to specific elements in HTML Template
- transition(':enter', []) is used to define animations for state changes. ':enter' respresents the moment with the element is added to the DOM
- 'query' searches for one or more elements within the HTML template based on provided selector
- style() handles the style coming in. So in this case `opacity: 0` moves up in transparency
- stagger() delays between each element found by 
*/
export const letterAnimation = trigger('letterAnimation', [
  transition(':enter', [
    query('.letter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      stagger(100, [
        animate('500ms ease-out', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
  ]),
]);
