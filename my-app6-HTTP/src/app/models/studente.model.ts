export class Studente{
  id?: number;
  nome: string;
  cognome: string;

  constructor(nome: string, cognome: string, id?: number){
    this.id =id;
    this.nome = nome;
    this.cognome = cognome;
  }
}
