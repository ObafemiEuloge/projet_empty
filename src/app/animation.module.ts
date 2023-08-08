import { animate, style, transition, trigger } from "@angular/animations";


export const opacityAnimation = trigger('opacityAnimation', [
    transition(":enter", [
        style({opacity: 0}),
        animate('2000ms cubic-bezier(0.35, 0, 0.55, 1)', style({opacity: 1})),
    ]),
]);

export const opacityAnimationChat = trigger('opacityAnimationChat', [
    transition(":enter", [
        style({opacity: 0}),
        animate('4000ms cubic-bezier(0.35, 0, 0.55, 1)', style({opacity: 1})),
    ]),
]);

export const fadeIn = trigger('fadeIn', [
    transition(":enter", [
        style({display: "block"}),
        animate('3000ms ease-in-out', style({ content : "" })),
    ]),
])

export const fadeOut = trigger('fadeOut', [
    transition(":enter", [
        style({display : "none"}),
        animate('3000ms ease-in-out', style({ display : "block" })),
    ]),
])
