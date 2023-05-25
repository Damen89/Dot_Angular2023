import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PrimoService {

  developer: string = "Dario";

  utente: {
    nome: string,
    cognome: string,
    tipo: string
  } = {
    nome: "Pippo",
    cognome: "Rossi",
    tipo: "Admin"
  }

  avviso: string = "Andiamo in pausa";

  scriviInConsole(){
    console.log("Ciao Dario");
  }

  constructor() { }
}
