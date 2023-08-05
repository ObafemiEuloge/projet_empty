import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../chat.service';
import { Categorie, Theme, Questions } from '../class-infos';
import { opacityAnimation } from '../animation.module';


import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { chatbotQuestion } from '../mock-infos';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [opacityAnimation]
})
export class ChatComponent implements OnInit {
  // categories: Categorie[] = [];
  // selectedCategorie!: Categorie;
  // themeListe: string[] | undefined = undefined;
  questionsGroupList: Questions[] = chatbotQuestion;
  questionList: string[] | undefined;
  // @Input() selectedCategorie!: Categorie

  profileForm = this.fb.group({
    title: [''],
    categorie: [''],
    theme: [''],
    desc: [''],
    color: this.fb.group({
      Primo: [''],
      Secondo: [''],
      Third: [''],
    }),

  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }

  // updateProfile() {
  //   this.profileForm.patchValue({
  //     firstName: 'Nancy',
  //     address: {
  //       street: '123 Drew Street'
  //     }
  //   });
  // }

  // get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }

  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }

  categories: Categorie[] = []; // La propriété dans laquelle les catégories seront stockées
  selectedCategorie!: Categorie; // La propriété dans laquelle la catégorie sélectionnée sera stockée
  selectedTheme!: string; // La propriété dans laquelle le thème sélectionnée sera stocké
  themeListe: string[] | undefined = undefined; // La propriété dans laquelle les thèmes seront stockés
  themeCat: string | undefined = undefined; // La propriété dans laquelle la valeur du thème sélectionnée sera stockée

  constructor(
    private chatService: ChatService, // appelle du service chat
    private fb: FormBuilder
  ) { }

  /**
   * Fonction permettant de selectionnée la catégorie
   * @param categorie_id 
   */
  onSelectCategorie(categorie_id: any) {
    this.themeListe = this.chatService.getCategorieThemeList(categorie_id.value);
    console.log(this.themeListe);
    console.log(categorie_id.value);

  }

  ngOnInit(): void {
    // this.categories = this.chatService.getCategories();
    // this.onSelect(this.selectedCategorie.id);
    this.questionsGroupList.forEach(el => {

      this.questionList = el.question;
      console.log(el.question[0]);
    });
    
    // this.questionList = this.questionsGroupList[0].chatQuestions;
   
  }
  
//   ngOnChanges () {
  
// }

    // console.log(this.categories.find(el => el.id === categorie_id.value)?.titre);
  }

  /**
   * Fonction permettant de selectionnée le thème
   * @param theme 
   */
//   onSelectTheme(theme: any) {
//     for (let i = 0; i < this.themeListe!.length; i++) {
//       if (i === Number(theme.value)) {
//         this.themeCat = this.themeListe![theme.value]
//       }
//     }
//     console.log(this.themeCat)
//   }

//   ngOnInit(): void {
//     this.categories = this.chatService.getCategories();
//     if (this.selectedCategorie !== undefined) {
//       this.onSelectCategorie(this.selectedCategorie.id)
//       this.onSelectTheme(this.selectedTheme)
//     }
//   }

// }
