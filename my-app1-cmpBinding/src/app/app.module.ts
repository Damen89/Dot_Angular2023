import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import UserComponent from './users/lista-users/user/user.component';
import { ListaUsersComponent } from './users/lista-users/lista-users.component';
import { GiochiComponent } from './giochi/giochi.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DashboardComponent,
    UsersComponent,
    AddUserComponent,
    UserComponent,
    ListaUsersComponent,
    GiochiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
