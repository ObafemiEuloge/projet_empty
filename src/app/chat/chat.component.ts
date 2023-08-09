import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Categorie } from '../class-infos';
import { opacityAnimation } from '../animation.module';
import { CATEGORIE } from '../mock-infos';
import { FormControl, FormGroup } from '@angular/forms';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [opacityAnimation]
})

export class ChatComponent implements OnInit {

  answersList: any[] | undefined;  // récupérer le tableau de réponses 

  categories: Categorie[] = CATEGORIE; // récupérer le tableau stockant les catégories

  titleSite: string = "";  // input du titre
  titleSiteInter: string = "";  // titre de l'utilisateur qu'on interpole

  categ: string = "";  // select de la catégorie
  categInter: string = "";  // la catégorie de l'utilisateur qu'on interpole

  them: string = "";  // input du thème
  themInter: string = "";  // le thème de l'utilisateur qu'on interpole

  color: string = "";  // le thème de l'utilisateur
  colorInter: string = "";  // le thème de l'utilisateur qu'on interpole

  pColor: string = ""; // couleur primaire
  sColor: string = ""; // couleur secondaire
  tColor: string = ""; // couleur tertiaire

  colorArray: string[] | undefined = [];  // récupérer les couleurs de l'utilisateur
  colorArrayCopy: string[] = this.colorArray!  // récupérer les couleurs de l'utilisateur

  /** les champs de saisie */
  input: boolean = false; // élément permettant d'entrer le nom du site
  selectCat: boolean = false; // élément permettant d'entrer la catégorie
  inputThem: boolean = false; // élément permettant d'entrer le thème
  selectColor: boolean = false; // élément permettant d'entrer le
  buttonSendMsg: boolean = true; // bouton permettant d'envoyer les réponses de l'utilisateur 
  colorChoice: boolean = false; // élément permettant d'entrer le 
  noColorChoice: boolean = false; // élément permettant d'entrer le
  buttonValider: boolean = false; // élément permettant d'entrer le
  buttonModif: boolean = false; // élément permettant d'entrer le
  opacit: number | undefined; // élément permettant d'entrer le
  mix: string = ""; // élément permettant d'entrer le
  formContact: boolean = false; // élément permettant d'entrer le

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.input = true;

  }
  click: number = 0
  sendNewQuiz() {
    if (this.titleSite !== "" && this.click === 0) {
      this.titleSiteInter = this.titleSite;
      this.answersList = this.chatService.getAnswers(this.titleSite)
      this.input = false;
      this.selectCat = true;
      this.click = 1;
    }
    if (this.categ !== "" && this.click === 1) {
      this.categInter = this.categ;
      this.answersList = this.chatService.getAnswers(this.categ)
      this.input = false;
      this.selectCat = false;
      this.inputThem = true;
      this.click = 2
    }
    if (this.them !== "" && this.click === 2) {
      this.themInter = this.them;
      this.answersList = this.chatService.getAnswers(this.them)
      this.input = false;
      this.selectCat = false;
      this.inputThem = false;
      this.selectColor = true;
      this.buttonSendMsg = false;
      this.click = 3
    }

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



  validerColor() {
    this.colorArray = []
    let pColor = this.profileForm.value.primaryColor
    let sColor = this.profileForm.value.secondaryColor
    let tColor = this.profileForm.value.tertiaryColor

    if (pColor !== '' || sColor !== '' || tColor !== '') {
      this.pColor = pColor!;
      this.sColor = sColor!;
      this.tColor = tColor!;
      this.colorArray?.push(pColor!, sColor!, tColor!);
      this.answersList?.push(this.colorArrayCopy?.splice(0))
      this.colorChoice = true;
      this.buttonValider = false;
      this.buttonModif = true;
    


      // this.answersList = this.chatService.getAnswers(this.them)
      console.log(this.answersList);
      this.opacit = 0.05;
      this.mix = "screen"
      if (this.colorChoice === true || this.noColorChoice === true) {
        setTimeout(() => {
          this.formContact = true;
        }, 3000);

      }
    }
    console.log(this.colorArray);
    return console.log(this.colorArray);

  }
  modifColor() {
    this.buttonValider = true;
    this.buttonModif = false;
  }
  annulerColor() {
    this.buttonValider = false;
    this.buttonModif = true;
  }
  acceptColor() {
    this.buttonValider = true;
    this.noColorChoice = false;
  }
  noColor() {
    this.buttonValider = false;
    this.noColorChoice = true;
    this.colorChoice = false;
    this.opacit = 0.05;
    this.mix = "screen"
    console.log(this.answersList);

    if (this.noColorChoice === true) {
      setTimeout(() => {
        this.formContact = true;
      }, 3000);

    }
  }

  templateChoice = new FormGroup({
    template_1: new FormControl(''),
    template_2: new FormControl(''),
    template_3: new FormControl(''),
  });

  template: string = "";
  choiceTemplate($event: any) {
    this.template = $event.target.value;
    this.answersList = this.chatService.getAnswers(this.template)
  }

  editTitle(){

  }

  editCategory(){

  }

  editTheme(){

  }



}