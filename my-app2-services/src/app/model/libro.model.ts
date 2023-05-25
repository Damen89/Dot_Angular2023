export class Libro{
  titolo: string;
  autore: string;
  prezzo: number;
  copertina?: string;

  constructor(titolo: string, autore: string, prezzo: number, copertina?: string){
    this.titolo = titolo;
    this.autore = autore;
    this.prezzo = prezzo;
    this.copertina = copertina;
  }

}
