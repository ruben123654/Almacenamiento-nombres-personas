import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { PersonaRegistroComponent } from './components/persona-registro/persona-registro';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaRegistroComponent
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }