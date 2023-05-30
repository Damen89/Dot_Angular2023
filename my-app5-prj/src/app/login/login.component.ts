import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GestioneUtentiService } from '../shared/gestione-utenti.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userServ: GestioneUtentiService, private router: Router){
  }

  loggedIn: boolean;

  onLogin(){
    this.loggedIn = true;
    this.userServ.login();
    this.router.navigate(['/']);
  }

  onLogout(){
    this.loggedIn = false;
    this.userServ.logout();
  }
}
