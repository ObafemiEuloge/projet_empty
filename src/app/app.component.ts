import { Component } from '@angular/core';
import { opacityAnimation } from './animation.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [opacityAnimation]
})
export class AppComponent {
  
  title = 'projet_empty';

  isBackgroundStyle1: Boolean = true;

  toggleBackgroundStyle(){
    this.isBackgroundStyle1 = !this.isBackgroundStyle1;
  }

}
