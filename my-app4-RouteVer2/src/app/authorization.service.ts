import { Injectable } from '@angular/core';
import { GestioneUtentiService } from './services/gestione-utenti.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  // utente: {
  //   nome: string,
  //   role: string
  // } = {
  //   nome: "Pippo",
  //   role: "Base"
  // }

  autorizzato: boolean = false;

  constructor(private userSev: GestioneUtentiService) { }

  // checkRole(){
  //   if(this.utente.role == "Admin"){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  checkRole(){
    const roleUserLogged = this.userSev.getUserRole("Anna");

    if(roleUserLogged === "Admin"){
        return true;
      }else{
        return false;
      }
    }
}
