import { Injectable } from '@angular/core';

interface item {
  nome: string;
  prezzo: number;
}

@Injectable({
  providedIn: 'root'
})
export class GestioneCarrelloService {

  items: item[]

  constructor() { }

  onAggiungiItem(nome: string, prezzo: number){
    let item = {nome: nome, prezzo: prezzo};
    this.items.push(item);
    console.log(this.items);

  }
}
