import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projet_empty';
  dynamicStyles: any = {}; // Un objet pour stocker les styles dynamiques

  changeStyle() {

    this.dynamicStyles = {
      'background-color': 'blue',
      'color': 'white',
      'font-size': '20px',
      'padding': '10px'
    }
  }
}
