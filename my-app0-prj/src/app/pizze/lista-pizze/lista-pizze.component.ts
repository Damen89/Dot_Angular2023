import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { GestioneCarrelloService } from 'src/app/services/gestione-carrello.service';
import { GestionePizzeService } from 'src/app/services/gestione-pizze.service';

@Component({
  selector: 'app-lista-pizze',
  templateUrl: './lista-pizze.component.html',
  styleUrls: ['./lista-pizze.component.css']
})
export class ListaPizzeComponent implements OnInit{

  listaPizze: Pizza[];

  pizzaDettaglio: Pizza;

  constructor(private servPizze: GestionePizzeService, private servCarr: GestioneCarrelloService){

  }

  ngOnInit(): void {
    this.listaPizze = this.servPizze.getPizze();
  }

  onRecuperaDettagli(pizza: Pizza){
    this.pizzaDettaglio = pizza;
  }

  onAggiungiAlCarrello(nome: string, prezzo: number){
    this.servCarr.onAggiungiItem(nome, prezzo);
  }
}
