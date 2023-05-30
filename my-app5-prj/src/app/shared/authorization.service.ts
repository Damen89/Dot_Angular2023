import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {



  constructor() { }

  controllaRuolo(): boolean{
    const roleUtenteLoggato = localStorage.getItem('roleUtenteLoggato');

    if(roleUtenteLoggato === "Admin"){
      return true;
    }else{
      return false;
    }
  }

}
