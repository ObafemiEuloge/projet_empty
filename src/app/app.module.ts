import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // module des routes et class de T
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '.angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { TemplateComponent } from './template/template.component';
import { StartComponent } from './start/start.component';

// L'ensemble des routes de notre application
const seetRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'template',
    component: TemplateComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ChatComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,

    RouterModule.forRoot(seetRoutes),  // chargement des routes dans l'application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
