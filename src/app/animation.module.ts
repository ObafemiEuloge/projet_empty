import { animate, style, transition, trigger } from "@angular/animations";


export const opacityAnimation = trigger('opacityAnimation', [
    transition(":enter", [
        style({opacity: 0, transform: 'translateY(400px)'}),
        animate('2000ms cubic-bezier(0.35, 0, 0.55, 1)', style({opacity: 1, transform: 'none'})),
    ]),
]);