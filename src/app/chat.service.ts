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
    return console.log(this.categories);
    // return this.categories;
  }

  getCategorieThemes() {
    this.themeLists.forEach(el => {
      if (el.id === "2") {
        console.log(el.theme_List);
        
      }
    })
    let themeList = this.themeLists.find(el => { el.id === "2" })?.theme_List;
    return console.log(themeList);

  }


}
