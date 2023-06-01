import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, authGuardChild } from './auth.guard';
import { CorsiComponent } from './corsi/corsi.component';
import { CorsoComponent } from './corsi/corso/corso.component';
import { DocenteComponent } from './docenti/docente/docente.component';
import { DocentiComponent } from './docenti/docenti.component';
import { EditDocenteComponent } from './docenti/edit-docente/edit-docente.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { StudenteComponent } from './studenti/studente/studente.component';
import { StudentiComponent } from './studenti/studenti.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'studenti', component: StudentiComponent, children: [
    // I : mi dicono che il frammento è dinamico. che è variabile
    {path: ':id/:nome/:corso/:status', component: StudenteComponent},
  ]},
  //canActivate si utilizza per controllare la rotta principale, la rotta genitore
  //canActivateChild si utilizza per controllare le rotte figlie, ovviamente se si è in presenza di rotte figlie
  {path: 'docenti', component: DocentiComponent, canActivateChild: [authGuardChild], children:[
    {path: ':id', component: DocenteComponent},
    {path: ':id/edit', component: EditDocenteComponent}
  ]},
  {path: 'corsi', component: CorsiComponent},
  {path: 'corsi/:nomeCorso', component: CorsoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'no-auth', component: NoAuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
