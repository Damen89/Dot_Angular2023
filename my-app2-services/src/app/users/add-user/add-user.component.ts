import { Component } from '@angular/core';
import { GestioneUsersService } from 'src/app/services/gestione-users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  username: string;
  role: string;

  constructor(private userServ: GestioneUsersService){

  }

  onAddUser(){
    this.userServ.addUser({username: this.username, role: this.role});
  }


}
