import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizadoPipe} from './pipes/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { PasswordPipe } from './pipes/password.pipe'

//import localeEs from '@angular/common/locales/es';
//import { registerLocaleData } from '@angular/common';
//registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
