import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtentiComponent } from './utenti/utenti.component';
import { StudentiComponent } from './utenti/studenti/studenti.component';
import { DocentiComponent } from './utenti/docenti/docenti.component';
import { SviluppatoriComponent } from './utenti/sviluppatori/sviluppatori.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UtentiComponent,
    StudentiComponent,
    DocentiComponent,
    SviluppatoriComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
