import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentiComponent } from './studenti/studenti.component';
import { DocentiComponent } from './docenti/docenti.component';
import { PersonaComponent } from './persona/persona.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChiSiamoComponent,
    ContattiComponent,
    NavbarComponent,
    StudentiComponent,
    DocentiComponent,
    PersonaComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
