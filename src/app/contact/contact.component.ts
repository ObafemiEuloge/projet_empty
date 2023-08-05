import { Component } from '@angular/core';
import { opacityAnimation } from '../animation.module';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [opacityAnimation]
})
export class ContactComponent {

}
