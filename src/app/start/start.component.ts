import { Component } from '@angular/core';
import { opacityAnimation } from '../animation.module';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [opacityAnimation]
})
export class StartComponent {

}
