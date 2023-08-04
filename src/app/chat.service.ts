import { Injectable } from '@angular/core';
import { CATEGORIE, THEME_LISTS } from './mock-infos';
import { Categorie, Theme } from './class-infos';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  categories: Categorie[] = CATEGORIE; // Toute les catégories
  listThemes: Theme[] = THEME_LISTS; // Toute la liste des themes des categories

  selectCategorie!: Categorie; // La variable stockant la catégorie sélectionnée
  themeList: string[] | undefined = undefined; // La liste des thèmes de la catégorie sélectionnée
  theme: string | undefined = undefined; // Le theme sélectionné

  constructor() { }

  /**
   * Fonction récupérant les catégories
   * @returns un tableau de catégorie
   */
  getCategories() {
    return this.categories;
  }

  /**
   * Fonction récupérant une catégorie
   * @param id identifiant de la catégorie
   * @returns retourne une catégorie
   */
  getCategorie(id: string): Categorie  {
     this.categories.forEach(el => {
      if (el.id === id) {
        this.selectCategorie = el;
      }
    })
    return this.selectCategorie;
  }

  /**
   * Fonction récupérant la liste des thémes de la catégorie
   * @param id identifiant de la catégorie sélectionnée
   * @returns retourne un tableau des thèmes de la catégorie
   */
  getCategorieThemeList(id: string): string[] | undefined {
    this.themeList = this.listThemes.find(el => el.id === id)?.theme_List;
    return this.themeList;
  }

  /**
   * Fonction récupérant le théme d'une catégorie
   * @param theme le thème sélectionné
   * @returns un thème
   */
  // getTheme(theme: string): string | undefined {
  //   this.themeList?.forEach(them => {
  //     if (them === theme) {
  //       this.theme = theme
  //     }
  //   });
  //   return this.theme
  // }

}
