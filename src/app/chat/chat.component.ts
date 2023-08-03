import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../chat.service';
import { Categorie, Theme } from '../class-infos';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  categories: Categorie[] = [];
  selectedCategorie!: Categorie;
  themeListe: string[] | undefined = undefined;

  option: string = "";
  @Input() themeList!: Theme;
  constructor(
    private chatService: ChatService,
  ) { }

  onSelect(categorie: any) {
    // this.selectedCategorie = this.chatService.getCategorie(categorie.id);
    // this.themeListe = this.chatService.getCategorieThemeList(categorie.id);
    // console.log(this.themeListe);
    console.log(categorie);
  }

  ngOnInit(): void {
    this.categories = this.chatService.getCategories();
    console.log(this.chatService.getCategorieThemeList("2"));
    console.log(this.chatService.getCategorie("2"));
    
  }
  
  ngOnChanges(){
    console.log(this.option);
    
  }

}
