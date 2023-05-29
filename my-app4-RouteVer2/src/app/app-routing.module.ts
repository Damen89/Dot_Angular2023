import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorsiComponent } from './corsi/corsi.component';
import { CorsoComponent } from './corsi/corso/corso.component';
import { DocenteComponent } from './docenti/docente/docente.component';
import { DocentiComponent } from './docenti/docenti.component';
import { EditDocenteComponent } from './docenti/edit-docente/edit-docente.component';
import { HomeComponent } from './home/home.component';
import { StudenteComponent } from './studenti/studente/studente.component';
import { StudentiComponent } from './studenti/studenti.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'studenti', component: StudentiComponent, children: [
    // I : mi dicono che il frammento è dinamico. che è variabile
    {path: ':id/:nome/:corso/:status', component: StudenteComponent},
  ]},
  {path: 'docenti', component: DocentiComponent, children:[
    {path: ':id', component: DocenteComponent},
    {path: ':id/edit', component: EditDocenteComponent}
  ]},
  {path: 'corsi', component: CorsiComponent},
  {path: 'corsi/:nomeCorso', component: CorsoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
