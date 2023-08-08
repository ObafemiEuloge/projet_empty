import { Injectable } from '@angular/core';
import { CATEGORIE } from './mock-infos';
import { Categorie } from './class-infos';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  categories: Categorie[] = CATEGORIE; // Toute les catégories

  selectCategorie!: Categorie; // La variable stockant la catégorie sélectionnée
  theme: string | undefined = undefined; // Le theme sélectionné

  answers: string[] = []; // Le tableau dans lequel sera stocké les réponses
  compteur: number = 0; // le compteur des tableaux

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
  getCategorie(id: string): Categorie {
    this.categories.forEach(el => {
      if (el.id === id) {
        this.selectCategorie = el;
      }
    })
    return this.selectCategorie;
  }

  /**
   * Fonction récupérant chaque réponses et les stockant une à une dans un tableau en fonction des itération
   * @returns 
   */
  getAnswers(answer: string) {
    this.answers.push(answer!)
    return this.answers
  }

}