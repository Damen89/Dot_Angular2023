import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorsiComponent } from './corsi/corsi.component';
import { DocentiComponent } from './docenti/docenti.component';
import { HomeComponent } from './home/home.component';
import { StudentiComponent } from './studenti/studenti.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "studenti", component: StudentiComponent},
  {path: "docenti", component: DocentiComponent},
  {path: "corsi", component: CorsiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
