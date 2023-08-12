// type générique des Categories
export class Categorie {
    static id: any;
    constructor(
        public id: string,
        public titre: string,
        public value: string
    ) { }
}

 /**
  * type générique du tableau des couleurs renseigneés par l'utilisateur 
  */
export class Colors {
    constructor(
        public template_colors: string[]
    ) { }
}

/**
 * type générique de l'objet qui récupére les informations de l'utilisateur
 */
export interface informationUser {
    siteName: string,
    category: string,
    theme: string,
    template: string,
    colors: string[],
    firstName: string,
    lastName: string,
    email: string
}