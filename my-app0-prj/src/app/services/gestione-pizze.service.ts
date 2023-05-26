import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class GestionePizzeService {

  private pizze: Pizza[] = [
    {
      id:0,
      nome: "Margherita",
      immagine: "https://cdn.shopify.com/s/files/1/0586/6795/8427/articles/Margherita-9920.jpg?crop=center&height=915&v=1644590028&width=1200",
      ingredienti: ["pomodoro", "mozzarella", "basilico"],
      pizzaiolo: {nome: "Gennaro", cognome: "Esposito"},
      prezzo: 5.60
    },
    {
      id:1,
      nome: "Marinara",
      immagine: "https://media-assets.lacucinaitaliana.it/photos/63c01847f5d7419a2dc115ef/1:1/w_1334,h_1334,c_limit/Pizza%20Marinara.jpg",
      ingredienti: ["pomodoro", "aglio"],
      pizzaiolo: {nome: "Gennaro", cognome: "Esposito"},
      prezzo: 4.50
    },
    {
      id:2,
      nome: "Napoli",
      immagine: "qwerty",
      ingredienti: ["pomodoro", "aglio", "acciughe"],
      pizzaiolo: {nome: "Ciro", cognome: "Russo"},
      prezzo: 5.00
    }
  ];


  getPizze(): Pizza[]{
    return this.pizze;
  }

  constructor() { }
}
