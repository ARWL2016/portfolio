import { trigger, state, animate, transition, style } from '@angular/animations';
// import { Component, Input } from '@angular/core';
const pageTransition =
  trigger('showPage', [
    state('on', style({ transform: 'translateY(0)' })),
    transition('void => on', [
      style({opacity: 0}),
      animate('600ms ease-in')
    ]),
    transition('on => void', [
      animate(0, style({ opacity: 0}))
    ])
  ]);

  export { pageTransition };
