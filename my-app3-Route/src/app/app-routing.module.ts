import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DocentiComponent } from './docenti/docenti.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonaComponent } from './persona/persona.component';
import { StudentiComponent } from './studenti/studenti.component';

const routes: Routes = [
// ogni rotta è un oggetto JS
{path: "", component: HomeComponent},
{path: "chi-siamo", component: ChiSiamoComponent, children:[
  //i : davanti alla rotta ci fanno capire che siamo in presenza di una rotta dinamica
  {path: ":nome",component: PersonaComponent},
  {path: ":nome/:id", component: PersonaComponent}
]},
{path: "contatti", component: ContattiComponent, children: [
  {path: "studenti", component: StudentiComponent },
  {path: "docenti", component: DocentiComponent, canActivate: [AuthGuard]}
]},
{path: "page-not-found", component: PageNotFoundComponent },
{path: "**", redirectTo: "page-not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
