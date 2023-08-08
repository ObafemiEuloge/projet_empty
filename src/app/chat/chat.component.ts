import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Categorie, Questions, quizAndAnswer } from '../class-infos';
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
  answersList: any[] | undefined;  // récupérer le tableau de réponses 
  quizsAndAnswersList: any[] | undefined = [];  // récupérer le tableau de (questions et réponses) 

  titleSite: string = "";  // récupérer le nom du site de l'utilisateur
  titleSiteInter: string = "";  // Réponse à afficher à l'utilisateur

  categ: string = "";  // récupérer la catégorie de l'utilisateur
  categInter: string = "";  // récupérer la catégorie de l'utilisateur

  them: string = "";  // récupérer le thème de l'utilisateur
  themInter: string = "";  // récupérer le thème de l'utilisateur

  color: string = "";  // récupérer le thème de l'utilisateur
  colorInter: string = "";  // récupérer le thème de l'utilisateur

  colorArray: string[] | undefined = [];  // récupérer les couleurs de l'utilisateur

  pColor!: string | null;

  input: boolean = false;
  inputThem: boolean = false;
  selectCat: boolean = false;
  selectThem: boolean = false;
  selectColor: boolean = false;
  buttonSendMsg: boolean = true;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    // this.quizsAndAnswersList = []
    this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
    this.input = true;
    console.log(this.quizsAndAnswersList);
    

  }
  click: number = 0
  sendNewQuiz() {
    if (this.titleSite !== "" && this.click === 0) {
      this.titleSiteInter = this.titleSite;
      this.answersList = this.chatService.getAnswers(this.titleSite)
      // this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
      this.input = false;
      this.selectCat = true;
      this.click = 1;
    }
    if (this.categ !== "" && this.click === 1) {
      this.categInter = this.categ;
      this.answersList = this.chatService.getAnswers(this.categ)
      // this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
      this.input = false;
      this.selectCat = false;
      this.inputThem = true;
      this.click = 2
    }
    if (this.them !== "" && this.click === 2) {
      this.themInter = this.them;
      this.answersList = this.chatService.getAnswers(this.them)
      // this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
      this.input = false;
      this.selectCat = false;
      this.inputThem = false;
      this.click = 3
      this.selectColor = true;
      this.buttonSendMsg = false
    }
    if (this.color !== "" && this.click === 3) {
      this.colorInter = this.color;
      this.answersList = this.chatService.getAnswers(this.them)
      // this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
      this.input = false;
      this.selectCat = false;
      this.selectThem = false;
      this.click = 4
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

  onSubmit() {
    this.colorArray = []
    let pColor = this.profileForm.value.primaryColor
    let sColor = this.profileForm.value.secondaryColor
    let tColor = this.profileForm.value.tertiaryColor

    this.colorArray?.push(pColor!, sColor!, tColor!)
    this.answersList = this.chatService.getAnswers(this.them)
    this.quizsAndAnswersList = this.chatService.getQuizAndAnswers()
    // this.quizsAndAnswersList?.push(this.colorArray);
    
    // this.answersList?.push(this.colorArray);

    console.log(this.quizsAndAnswersList);
    console.log(this.quizsAndAnswersList);
  }

}