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

  getCategories(){
    return this.categories;
  }

  getThemes(id: string){
    // this.themeLists.find(el => {el.id === id})?
  }


}
