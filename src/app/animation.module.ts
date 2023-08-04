import { animate, style, transition, trigger } from "@angular/animations";


export const opacityAnimation = trigger('opacityAnimation', [
    transition(":enter", [
        style({opacity: 0}),
        animate('2000ms', style({opacity: 1})),
    ]),
]);