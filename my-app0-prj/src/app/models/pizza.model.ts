export class Pizza {

  id: number;
  nome: string;
  prezzo: number;

  // ingredienti: Ingrediente[];
  //pizzaiolo: Pizzaiolo;

  constructor(id: number, nome: string, prezzo: number){
    this.id = id;
    this.nome = nome;
    this.prezzo = prezzo;
  }

}

// export interface Pizza{
//   id: number;
//   nome: string;
//   prezzo: number;
// }
