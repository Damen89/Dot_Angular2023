export class Gioco{
  nome: string;
  tipo: string;
  voto: number = 0;
  img: string;

  constructor(nome: string, tipo: string, voto: number, img: string){
    this.nome = nome;
    this.tipo = tipo;
    this.voto = voto;
    this.img = img;
  }

  like(){
    this.voto++;
  }

  dislike(){
    this.voto--;
  }
}
