import { Component, EventEmitter, Output } from '@angular/core';
import { Gioco } from 'src/app/model/gioco.model';

@Component({
  selector: 'app-crea-gioco',
  templateUrl: './crea-gioco.component.html',
  styleUrls: ['./crea-gioco.component.css']
})
export class CreaGiocoComponent {

  @Output() giocoCreated = new EventEmitter<Gioco>();


  //Queste sono le prop segnate con ngModel sul form
  nome: string ;
  img: string ;
  tipo: string ;

  avviso: string;

  onAddGioco(){
    console.log(this.nome);

    if(this.nome === undefined || this.img === undefined || this.tipo === undefined){
      this.avviso = "Controlla il form, hai dimenticato qualcosa !";
      console.log("Sono qui");

    }else{
      this.giocoCreated.emit(
        new Gioco(this.nome, this.tipo, 0, this.img)
        );
        this.avviso = "";
      }
    }
  }
