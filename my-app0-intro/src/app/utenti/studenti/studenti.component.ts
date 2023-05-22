import { Component, OnDestroy } from '@angular/core';
import { Studente } from './model/studente.model';
import { Studente2 } from './model/studente2.model';
import { Studente3 } from './model/studenteInt.model';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent {

  //esempio singolo studente con notazione letterale
  mioStudente: Studente = {
    id: 0,
    nome: "Pippo",
    cognome: "Rossi",
    presenza: false
  }

  //esempio studente singolo con costruttore di default
  mioStudente2: Studente = new Studente(1, "Anna", "Rossi", true);

  mioStudente3: Studente2 = new Studente2(2, "Lucia", "Verdi", true);

  mioStudente4: Studente2 = {
    id: 3,
    nome: "Paolo",
    cognome: "Neri",
    presenza: false
  }

  mioStudente5: Studente3 = {
    id: 4,
    nome: "Gennaro",
    cognome: "Rossi",
    presenza: false
  }


  //ho un array di tipo Studente
  listaStudenti: Studente[] = [
    {
      id: 0,
      nome: "Paolo",
      cognome: "Bianchi",
      presenza: true
    },
    {
      id: 1,
      nome: "Luisa",
      cognome: "Rossi",
      presenza: true
    },
    {
      id: 2,
      nome: "Fede",
      cognome: "Bianchi",
      presenza: false
    },
    {
      id: 3,
      nome: "Luca",
      cognome: "Gialli",
      presenza: true
    },
    new Studente(4, "Maria", "Ferri", false),
    new Studente(5, "Mario", "Azzurri", true)
  ];


  constructor(){
    // let saluto = this.mioStudente2.presentati();
    // console.log(saluto);
  }


  getBg(){
    return this.mioStudente5.presenza == true ? "green": "red";
  }

  getName(){
    return this.mioStudente4.nome;
  }

  getColor(){
    let numCasuale = Math.random();
    if(numCasuale > 0.5){
      return "online"
    }else{
      return "offline"
    }
  }



}
