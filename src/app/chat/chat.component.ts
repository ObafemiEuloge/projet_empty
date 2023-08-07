import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Categorie, Questions } from '../class-infos';
import { opacityAnimation } from '../animation.module';
import { CATEGORIE, chatBotQuiz } from '../mock-infos';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [opacityAnimation]
})

export class ChatComponent implements OnInit {

  categories: Categorie[] = CATEGORIE; // récupérer le tableau stockant les catégories 
  quizsList: string[] | undefined;  // récupérer le tableau de question 
  answersList: string[] | undefined;  // récupérer le tableau de réponses 
  quizsAndAnswersList: string[] | undefined;  // récupérer le tableau de (questions et réponses) 

<<<<<<< HEAD
  titleSite: string = "";  // récupérer la réponse de l'utilisateur
  categ: string = "";  // récupérer la réponse de l'utilisateur
  them: string = "";  // récupérer la réponse de l'utilisateur


=======
  titleSite: string = "";  // récupérer le nom du site de l'utilisateur
  categ: string = "";  // récupérer la catégorie de l'utilisateur
  them: string = "";  // récupérer le thème de l'utilisateur
>>>>>>> 6d245578c98b3494c0b0362423ca74f099cb89d0


  input: boolean = false;
  selectCat: boolean = false;
  selectThem: boolean = false;
  selectColor: boolean = false;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
    this.input = true;
  }
<<<<<<< HEAD
  click: number = 0;
  sendNewQuiz() {
    if (this.titleSite !== "") {
=======
  click: number = 0
  sendNewQuiz() {
    if (this.titleSite !== "" && this.click === 0) {
>>>>>>> 6d245578c98b3494c0b0362423ca74f099cb89d0
      this.answersList = this.chatService.getAnswers(this.titleSite)
      this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
      this.input = false;
      this.selectCat = true;
      this.click = 1;
    }
    if (this.categ !== "" && this.click === 1) {
      this.answersList = this.chatService.getAnswers(this.categ)
      this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
      this.input = false;
      this.selectCat = false;
      this.selectThem = true;
      this.click = 2
    }
    if (this.them !== "" && this.click === 2) {
      this.answersList = this.chatService.getAnswers(this.them)
      this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
      this.input = false;
      this.selectCat = false;
      this.selectThem = false;
      this.selectColor = true;
      this.click = 3
    }
    
  }

  onSelectCategorie(categorie_id: any) {
    this.chatService.getCategorieThemeList(categorie_id.value);
  }

  profileForm = new FormGroup({
    // Primary Color
    primaryColor: new FormControl(''),
    primaryColorHex: new FormControl(''),

    // Secondary Color
    secondaryColor: new FormControl(''),
    secondaryColorHex: new FormControl(''),

    // Tertiary Color
    tertiaryColor: new FormControl(''),
    tertiaryColorHex: new FormControl(''),

  });

  onSubmit() { }
  
}

