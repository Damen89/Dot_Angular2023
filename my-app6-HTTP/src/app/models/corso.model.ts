export class Corso{
  id: number;
  nomeCorso: string;
  aula: string;
  corsoDiLaurea: string;

  constructor(id: number, nomeCorso: string, aula: string, corsoDiLaurea: string){
    this.id = id;
    this.nomeCorso = nomeCorso;
    this.aula = aula;
    this.corsoDiLaurea = corsoDiLaurea;
  }
}
