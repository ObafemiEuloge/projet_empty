import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Categorie, Questions } from '../class-infos';
import { opacityAnimation } from '../animation.module';
import { CATEGORIE, chatBotQuiz } from '../mock-infos';
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

  titleSite: string = "";  // récupérer la réponse de l'utilisateur
  cate: string = "";  // récupérer la réponse de l'utilisateur

  input: boolean = false;
  selectCat: boolean = false;
  selectThem: boolean = false;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
    this.input = true;
  }
  sendNewQuiz() {
    if (this.titleSite !== "") {
      this.answersList = this.chatService.getAnswers(this.titleSite)
      this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
    }
    // if (this.cate !== "") {
    //   this.answersList = this.chatService.getAnswers(this.cate)
    //   this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
    //   this.input = false;
    //   this.selectCat = false;
    // }
  }

  onSelectCategorie(categorie_id: any) {
    this.chatService.getCategorieThemeList(categorie_id.value);
  }
}

