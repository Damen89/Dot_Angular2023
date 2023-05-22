//utilizzo la dichiarazione di classe per poter definire un nuovo tipo di dato complesso
export class Studente{
  id: number;
  nome: string;
  cognome: string;
  presenza: boolean;

  constructor(id: number,nome: string, cognome: string, presenza: boolean){
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.presenza = presenza;
  }

  // presentati(): string{
  //   return "Ciao mi chiamo: " + this.nome;
  // }
}
