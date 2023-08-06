import { Component } from '@angular/core';
import { opacityAnimation } from '../animation.module';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  animations: [opacityAnimation]
})
export class TemplateComponent {

}
