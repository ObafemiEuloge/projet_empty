//class Categorie
export class Categorie {
    static id: any;
    constructor(
        public id:string,
        public titre:string,
        public value: string
    ){}
}

export class Theme {
    constructor(
        public id : string,
        public theme_List: string []
    ){}
}
export class Colors {
    constructor(
        public template_colors: string []
    ){}
}
export class Questions {
        constructor(
            public num: number,
            public question: string,
        ) {}
}
// export class Questions {
//         constructor(
//             public chatQuestions: string [],
//         ) {}
// }