import { Component } from '@angular/core';
import { opacityAnimation } from '../animation.module';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [opacityAnimation]
})
export class StartComponent {
  answersList: any[] | undefined;  // récupérer le tableau de réponses 
  quizsAndAnswersList: any[] | undefined;  // récupérer le tableau de (questions et réponses)

  constructor(
    private chatService: ChatService
  ) { }
  
}
