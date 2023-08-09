import { Component } from '@angular/core';
import { opacityAnimation } from '../animation.module';

@Component({
  selector: 'app-start-bot',
  templateUrl: './start-bot.component.html',
  styleUrls: ['./start-bot.component.css'],
  animations: [opacityAnimation]
})
export class StartBotComponent {

}
