import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  //dichiaro le prop
  utente1: string;
  utente2: string;
  utente3: string;
  utente4: string;
  utente5: string;
  utente6: string = "Matteo"


  //il metodo costruttore costruisce l'istanza della classe
  constructor(){
    //assegno un valore alle mie prop
    this.utente1 = "Angelo";
    this.utente2 = "Alessio";
    this.utente3 = "Monica";
    this.utente4 = "Leonardo";
    this.utente5 = "Oleksandr";
  }


  ngOnInit(): void {
    //logica, codice
  }


}
