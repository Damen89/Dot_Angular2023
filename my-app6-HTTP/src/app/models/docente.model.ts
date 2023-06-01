export class Docente{
  id?: number;
  nome: string;
  materia: string;

  constructor(nome: string, materia: string, id?: number){
    this.nome = nome;
    this.materia = materia;
    this.id = id;
  }
}
