import { Pizzaiolo } from "./pizzaiolo.model";

export class Pizza {

  id: number;
  nome: string;
  prezzo: number;
  immagine: string;
  pizzaiolo: Pizzaiolo;

  // ingredienti: Ingrediente[];

  constructor(id: number, nome: string, prezzo: number, immagine: string, pizzaiolo: Pizzaiolo){
    this.id = id;
    this.nome = nome;
    this.prezzo = prezzo;
    this.immagine = immagine;
    this.pizzaiolo = pizzaiolo;
  }

}

// let pizza = new Pizza(0, "Margherita", 5.60, "aswedrftgyhujk", new Pizzaiolo("Gennaro", "Esposito"));

// let pizza2 = new Pizza(0, "Margherita", 5.60, "aswedrftgyhujk", {nome: "Gennaro", cognome: "Esposito"});

// let pizza3 = {
//   id: 1,
//   nome: "Marinara",
//   prezzo: 4.50,
//   immagine: "opknjadfol",
//   pizzaiolo: {
//     nome: "Ciro",
//     cognome: "Russo"
//   }
// }
// export interface Pizza{
//   id: number;
//   nome: string;
//   prezzo: number;
// }
