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
  // @Input() selectedCategorie!: Categorie

  constructor(
    private chatService: ChatService,
  ) { }

  onSelect(categorie_id: any) {
    this.selectedCategorie = this.chatService.getCategorie(categorie_id);
    this.themeListe = this.chatService.getCategorieThemeList(categorie_id.value);
    console.log(this.themeListe);
    console.log(categorie_id.value);
    
  }
  
  ngOnInit(): void {
    this.categories = this.chatService.getCategories();
    this.onSelect(this.selectedCategorie.id)    
  }
  
}
