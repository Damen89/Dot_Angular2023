import { Component, OnInit } from '@angular/core';
import { PrimoService } from '../services/primo.service';
import { SecondoService } from '../services/secondo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  utente: {};
  studente: string;

  //un service può essere iniettato in più component, un component può avere iniettato più service contemporaneamente

  constructor(private primoServ: PrimoService, private secondoServ: SecondoService){

  }

  ngOnInit(): void {
    this.utente = this.primoServ.utente;
    console.log(this.utente);

    this.studente = this.secondoServ.studente;
    console.log(this.studente);


    console.log(this.secondoServ.stampaUtenti());

  }
}
