import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../chat.service';
import { Categorie } from '../class-infos';
import { opacityAnimation } from '../animation.module';
import { CATEGORIE } from '../mock-infos';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { fakeAsync } from '@angular/core/testing';
import { informationUser } from '../class-infos';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [opacityAnimation]
})

export class ChatComponent implements OnInit {



  // answersList: any[] | undefined;  // récupérer le tableau de réponses 

  categories: Categorie[] = CATEGORIE; // propriété récupérerant le tableau stockant des catégories

  titleSite: string = "";  // input du titre
  titleSiteInter: string = "";  // titre de l'utilisateur qu'on interpole

  categ: string = "";  // select de la catégorie
  categInter: string = "";  // la catégorie de l'utilisateur qu'on interpole

  them: string = "";  // input du thème
  themInter: string = "";  // le thème de l'utilisateur qu'on interpole

  color: string = "";  // le thème de l'utilisateur
  colorInter: string = "";  // le thème de l'utilisateur qu'on interpole

  pColor: string = ""; // couleur primaire de l'utilisateur
  sColor: string = ""; // couleur secondaire de l'utilisateur
  tColor: string = ""; // couleur tertiaire de l'utilisateur

  colorArray: string[] = [];  // récupérer les couleurs de l'utilisateur
  colorArrayCopy: string[] = this.colorArray!  // copie du tableau des couleurs

  /** les champs de saisie */
  input: boolean = false; // propriété permettant d'afficher le champ permettant d'entrer le nom du site
  selectCat: boolean = false; // propriété permettant d'afficher le champ permettant d'entrer la catégorie
  inputThem: boolean = false; // propriété permettant d'afficher le champ permettant d'entrer le thème

  inputModif: boolean = false; // propriété permettant d'afficher le champ permettant d'entrer le nom du site
  selectCatModif: boolean = false; // propriété permettant d'afficher le champ permettant d'entrer la catégorie
  inputThemModif: boolean = false; // propriété permettant d'afficher le champ permettant d'entrer le thème

  template: string = ""; // propriété permettant de préciser le template choisit

  colorChoice: boolean = false; // propriété permettant d'afficher les réponses des couleurs 

  noColorChoice: boolean = false; // propriété permettant d'afficher la réponses au cas ou on ne choisit pas de couleurs

  lname: string = ""; // Propriété permettant de récupérer le nom de l'utilisateur
  fname: string = ""; // Propriété permettant de récupérer le prénom de l'utilisateur
  email: string = ""; // Propriété permettant de récupérer l'email de l'utilisateur

  buttonValider: boolean = false; // bouton pour valider les couleurs

  buttonModif: boolean = false; // bouton pour modifier les couleurs
  buttonModifTemplate: boolean = false; // bouton pour modifier le template

  buttonSendMsg: boolean = true; // bouton permettant d'envoyer les réponses de l'utilisateur 
  buttonModifMsg: boolean = false; // bouton permettant d'envoyer les réponses de l'utilisateur modifiées
  congratulation: boolean = false; // propriété permettant d'afficher le formulaire de contact
  formContact: boolean = false; // propriété permettant d'afficher le formulaire de contact

  btnContinue: boolean = false; // propriété permettant d'afficher le formulaire de contact

  click: number = 0 // compteur du click du button d'envoi des messages
  clickMod: number = 0 // compteur du click du button d'envoi des messages modifiées

  /**
   * Propriété récupérant les informations de l'utilisateur
   */
  informationUser: informationUser = {
    siteName: "",
    category: "",
    theme: "",
    template: "",
    colors: [],
    firstName: "",
    lastName: "",
    email: ""
  }

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.input = true;
  }

  /**
   * Fonction d'envoi des réponses
   */
  sendAns() {
    if (this.titleSite !== "" && this.click === 0) {
      this.titleSiteInter = this.titleSite;
      // this.answersList = this.chatService.getAnswers(this.titleSite)
      this.input = false;
      this.selectCat = true;
      this.click = 1;
      this.scrollToBottom()

    }
    if (this.categ !== "" && this.click === 1) {
      this.categInter = this.categ;
      // this.answersList = this.chatService.getAnswers(this.categ)
      this.input = false;
      this.selectCat = false;
      this.inputThem = true;
      this.click = 2
      this.scrollToBottom()

    }
    if (this.them !== "" && this.click === 2) {
      this.themInter = this.them;
      // this.answersList = this.chatService.getAnswers(this.them)
      this.input = false;
      this.selectCat = false;
      this.inputThem = false;
      this.buttonSendMsg = false;
      this.click = 3
      this.scrollToBottom()

    }

  }
  /**
   * Fonction d'envoi des réponses modifiées
   */
  sendModif() {
    if (this.inputModif === true) {
      this.titleSiteInter = this.titleSite;
      // this.answersList = this.chatService.getAnswers(this.titleSite)
      this.buttonModifMsg = false;
      this.inputModif = false;
      this.scrollToBottom()

    }

    if (this.selectCatModif === true) {
      this.categInter = this.categ;
      // this.answersList = this.chatService.getAnswers(this.categ)
      this.buttonModifMsg = false;
      this.selectCatModif = false;
      this.scrollToBottom()
    }
    if (this.inputThemModif === true) {
      this.themInter = this.them;
      // this.answersList = this.chatService.getAnswers(this.them)
      this.buttonModifMsg = false;
      this.inputThemModif = false;
      this.scrollToBottom()
    }
  }

  /**
 * Fonction de modification du nom de site
 */
  editTitle() {
    this.inputModif = true;
    this.buttonModifMsg = true;
  }

  /**
   * Fonction de modification de la catégorie
   */
  editCategory() {
    this.selectCatModif = true;
    this.buttonModifMsg = true;
  }

  /**
   * Fonction de modification du thème
   */
  editTheme() {
    this.inputThemModif = true;
    this.buttonModifMsg = true;
  }

  /**
   * Fonction de modification du template
   */
  editTemplate() {
    this.template = "";
    this.buttonModifTemplate = false;
  }


  /**
   * Fonction permettant de choisir un template
   * @param $event 
   */
  choiceTemplate($event: any) {
    this.template = $event.target.value;
    // this.answersList = this.chatService.getAnswers(this.template)
    this.buttonModifTemplate = true;
    this.congratulation = true;
  }

  /**
   * FormGroup des couleurs
   */
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

  /**
   * Fonction de validation des couleurs
   * @returns 
   */
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
      // this.answersList?.push(this.colorArrayCopy?.splice(0))
      this.colorChoice = true;
      this.buttonValider = false;
      this.buttonModif = true;
      this.noColorChoice = false;

      // console.log(this.answersList);
      if (this.colorChoice === true) {
        setTimeout(() => {
          this.formContact = true;
          // this.btnContinue = true;
        }, 3000);

      }
    }
    console.log(this.colorArray);
    return console.log(this.colorArray);

  }

  /**
   * Fonction de modificaton des couleurs
   */
  modifColor() {
    this.buttonValider = true;
    this.buttonModif = false;
  }

  /**
   * Fonction d'annulation de la modification des couleurs
   */
  annulerColor() {
    this.buttonValider = false;
    this.buttonModif = true;
  }

  /**
   * Fonction pour choisir des palettes de couleurs
   */
  acceptColor() {
    this.buttonValider = true;
    this.noColorChoice = false;
  }

  /**
   * Fonction permettant de ne pas choisir de palette de couleurs
   */
  noColor() {
    this.buttonValider = false;
    this.noColorChoice = true;
    this.colorChoice = false;
    this.buttonModif = true;
    // console.log(this.answersList);
    if (this.noColorChoice === true) {
      setTimeout(() => {
        this.formContact = true;
        // this.btnContinue = true;
      }, 4000);
    }
  }

  /**
   * Fonction permettant de revenir sur le chat bot au cas ou on veut faire des modification
   */
  retour() {
    this.congratulation = false;
    this.btnContinue = true
    setTimeout(() => {
      this.formContact = false;
    }, 1000);
  }

  /**
   * Fonction permettant de poursuivre avec renseignement des informations
   */
  continuer() {
    this.congratulation = true;
    this.btnContinue = false
    setTimeout(() => {
      this.formContact = true;
    }, 2000);
  }


  @ViewChild('scroll') child!: ElementRef;
  ngAfterViewInit() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    const scroll = this.child.nativeElement;
    scroll.scrollTop = scroll.scrollHeight;
    console.log(scroll.scrollTop);
    console.log(scroll.scrollHeight);

  }
  /**
   * Fonction récupérant toutes les informations de l'utilisateur
   */
  onSumbit() {
    this.informationUser.siteName = this.titleSiteInter, // nom du site de l'utilisateur
      this.informationUser.category = this.categInter, // catégorie choisit par l'utilisateur
      this.informationUser.theme = this.themInter, // thème choisit par l'utilisateur
      this.informationUser.template = this.template, // template choisit par l'utilisateur
      this.informationUser.colors = this.colorArray, // tableau de couleur choisit par l'utilisateur
      this.informationUser.firstName = this.fname, // nom de l'utilisateur
      this.informationUser.lastName = this.lname, // prénom de l'utilisateur
      this.informationUser.email = this.email, //email de l'utilisateur
      console.log(this.informationUser); // affiche toute les informations de l'utilisateur
  }
}