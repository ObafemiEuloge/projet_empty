import { Injectable } from '@angular/core';
import { CATEGORIE, THEME_LISTS, chatBotQuiz, COLORS } from './mock-infos';
import { Categorie, Questions, Theme } from './class-infos';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  categories: Categorie[] = CATEGORIE; // Toute les catégories
  listThemes: Theme[] = THEME_LISTS; // Toute la liste des themes des categories

  selectCategorie!: Categorie; // La variable stockant la catégorie sélectionnée
  themeList: string[] | undefined = undefined; // La liste des thèmes de la catégorie sélectionnée
  theme: string | undefined = undefined; // Le theme sélectionné

  quizs: string[] = []; // Le tableau dans lequel sera stocké les questions
  answers: string[] = []; // Le tableau dans lequel sera stocké les réponses
  quizsAndAnswers: string[] = []; // Le tableau dans lequel sera stocké les questions et les réponses
  chatQuizs: Questions[] = chatBotQuiz; // Toute les catégories
  compteur: number = 0; // le compteur des tableaux

  input: boolean = false;
  selectCat: boolean = false;
  selectThem: boolean = false;

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

  /**
   * Fonction récupérant chaque question et les stockant une à une dans un tableau en fonction des itération
   */
  getQuiz() {
    for (let i = this.compteur; i <= this.compteur;) {
      if (this.chatQuizs[i]) {
        this.quizs.push(this.chatQuizs[i].question)
      }
      return this.quizs
    }
    return this.quizs;
  }


  userAnswer: string ="";  // récupérer la réponse de l'utilisateur

  /**
   * Fonction récupérant chaque réponses et les stockant une à une dans un tableau en fonction des itération
   * @returns 
   */
  getAnswers(answer: string) {
        if (this.compteur < this.chatQuizs.length - 1) {
          this.answers.push(answer)
        this.quizsAndAnswers.push(answer)
      }
      this.compteur++
      return this.answers, this.quizsAndAnswers
  }

  /**
   * Fonction récupérant chaque (question et réponses) et les stockant une à une dans un tableau en fonction des itération
   * @returns 
   */
  getQuizAndAnswers(){
    for (let i = this.compteur; i <= this.compteur;) {
      if (this.chatQuizs[i]) {
        this.quizsAndAnswers.push(this.chatQuizs[i].question)
      }
      // this.compteur++
      return this.quizsAndAnswers
    }
    return this.quizsAndAnswers;
  }

}
