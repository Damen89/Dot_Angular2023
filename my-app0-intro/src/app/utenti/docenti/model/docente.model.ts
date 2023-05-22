export class Docente{

  id: number;
  nome: string;
  presenza: boolean;
  materia: string

  constructor(id: number, nome: string, presenza: boolean, materia: string){
    this.id = id;
    this.nome = nome;
    this.presenza = presenza;
    this.materia = materia;
  }
}
