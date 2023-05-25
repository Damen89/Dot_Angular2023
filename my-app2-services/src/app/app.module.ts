import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ListaUsersComponent } from './users/lista-users/lista-users.component';
import { UserComponent } from './users/lista-users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BibliotecaComponent,
    AddUserComponent,
    ListaUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
