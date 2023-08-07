import { animate, style, transition, trigger } from "@angular/animations";


export const opacityAnimation = trigger('opacityAnimation', [
    transition(":enter", [
        style({opacity: 0}),
        animate('2000ms cubic-bezier(0.35, 0, 0.55, 1)', style({opacity: 1})),
    ]),
]);

export const loadingMessage = trigger("loadingMessageAnimation", [
    transition(":enter", [
        style({})
    ])
])