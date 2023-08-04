import { Component } from '@angular/core';
import { opacityAnimation } from '../animation.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [opacityAnimation]
})
export class HomeComponent {

}
