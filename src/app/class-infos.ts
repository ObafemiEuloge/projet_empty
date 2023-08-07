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
<<<<<<< HEAD
=======
        ) {}
}
export class quizAndAnswer {
        constructor(
            public title: string,
            public cate: string,
            public them: string,
            public color: string[],
            public templa: string,
>>>>>>> 4b6db43d33f646448fcfd1bba686f09c9efb9e0c
        ) {}
}
// export class Questions {
//         constructor(
//             public chatQuestions: string [],
//         ) {}
// }