import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PersonaForm } from './components/persona-form/persona-form';
import { PersonaRegistro } from './components/persona-registro/persona-registro';

@NgModule({
  declarations: [App, PersonaForm, PersonaRegistro],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
