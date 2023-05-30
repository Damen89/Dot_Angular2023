import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class GestioneUtentiService {

  listaUtenti: Utente[] = [
    {
      id: 0,
      username: "Dario",
      password: "1234",
      role: "Admin"
    },
    {
      id: 1,
      username: "Anna",
      password: "asdfg",
      role: "Base"
    }
  ];

  getUserRole(username: string){
    const utente = this.listaUtenti.find(
      (u) =>{
        return u.username === username;
      }
    )

    if(utente){
      return utente.role;
    }else{
      return "Guest";
    }
  }

  constructor() { }
}
