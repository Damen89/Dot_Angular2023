import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtentiComponent } from './utenti/utenti.component';
import { StudentiComponent } from './utenti/studenti/studenti.component';
import { DocentiComponent } from './utenti/docenti/docenti.component';

@NgModule({
  declarations: [
    AppComponent,
    UtentiComponent,
    StudentiComponent,
    DocentiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
