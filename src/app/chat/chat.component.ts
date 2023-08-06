import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../chat.service';
import { Categorie, Questions } from '../class-infos';
import { opacityAnimation } from '../animation.module';
import { CATEGORIE, chatbotQuestion } from '../mock-infos';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [opacityAnimation]
})

export class ChatComponent implements OnInit {

  categories: Categorie[] = CATEGORIE; // récupérer le tableau stockant les catégories 
  questionsGroupList: Questions[] = chatbotQuestion; //  récupérer le tableau stockant la liste des questions à poser
  questionList: string[] | undefined;  // récupérer le tableau de question dans le grand tableau 

  constructor() { }

  ngOnInit(): void {
   
  }

   index: number = 1; // Index pour incrémenter l'index du tableau et passer à la question suivante
   userAnswer: string ="";  // récupérer la réponse de l'utilisateur
   showUserAnswer: string = "";  // variable allant permettre d'afficher la réponse de l'utilisateur 

   quests: string[] = [];  
  answers: string [] = [];
  categoriesOption: string[] = [];


  nextQuestion () {
    this.showUserAnswer = this.userAnswer;
    this.answers.push(this.showUserAnswer);
    this.quests.push(this.questionsGroupList[0].question[this.index]);
    this.categoriesOption.push(this.categories[this.index].value)
    this.index++;
    this.userAnswer = ""
  }
  
  }

