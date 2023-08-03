import { Injectable } from '@angular/core';
import { CATEGORIE, THEME_LISTS } from './mock-infos';
import { Categorie, Theme } from './class-infos';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  categories: Categorie[] = CATEGORIE;
  listThemes: Theme[] = THEME_LISTS;

  selectCategorie!: Categorie;
  themeList: string[] | undefined = undefined;

  constructor() { }

  getCategories() {
    return this.categories;
  }

  getCategorie(id: string): Categorie  {
     this.categories.forEach(el => {
      if (el.id === id) {
        this.selectCategorie = el;
      }
    })
    return this.selectCategorie;
  }

  getCategorieThemeList(id: string): string[] | undefined {
    this.themeList = this.listThemes.find(el => el.id === id)?.theme_List;
    return this.themeList;
  }

}
