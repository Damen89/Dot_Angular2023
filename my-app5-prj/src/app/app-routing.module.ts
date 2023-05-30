import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { PaniniComponent } from './panini/panini.component';
import { PizzeComponent } from './pizze/pizze.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "pizze", component: PizzeComponent, canActivate: [authGuard]},
  {path: "panini", component: PaniniComponent, canActivate: [authGuard]},
  {path: "login", component: LoginComponent},
  {path: "no-auth", component: NoAuthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
