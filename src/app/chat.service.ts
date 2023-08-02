import { Injectable } from '@angular/core';
import { CATEGORIE, THEME_LISTS } from './mock-infos';
import { Categorie, Theme } from './class-infos';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  categories: Categorie[] = CATEGORIE
  themeLists: Theme[] = THEME_LISTS

  constructor() { }

  getCategories() {
    // return console.log(this.categories);
    return this.categories;
  }

  getCategorieThemes(id: string) {
    this.themeLists.find(el => { el.id === id })?.theme_List;
  }


}
