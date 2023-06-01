import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class GestioneUtentiService {

  utenteLoggato: Utente = {
    id: 1,
    username: "Pippo",
    password: "12345",
    role: 'Base'
  }

  constructor() { }

  login(){
    if(this.utenteLoggato){
      localStorage.setItem("roleUtenteLoggato", this.utenteLoggato.role);
      localStorage.setItem("usernameUtentLoggato", this.utenteLoggato.username);
    }
  }

  logout(){
    localStorage.clear();
  }

}
