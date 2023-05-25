import { Injectable } from '@angular/core';
import { PrimoService } from './primo.service';

@Injectable({
  providedIn: 'root'
})
export class SecondoService {

  studente: string = "Paolo Bianchi"

  //posso anche iniettare un service dentro un altro
  constructor(private primoServ: PrimoService) {

  }

  stampaUtenti(): string{
    let mieiUtenti = this.studente + " " + this.primoServ.utente.nome;
    return mieiUtenti;
  }
}
