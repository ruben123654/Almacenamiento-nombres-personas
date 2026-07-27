import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { PersonaRegistroComponent } from './components/persona-registro/persona-registro';
import { PersonaListaComponent } from './components/persona-lista/persona-lista';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaRegistroComponent,
    PersonaListaComponent
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
