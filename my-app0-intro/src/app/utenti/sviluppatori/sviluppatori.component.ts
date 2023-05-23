import { Component } from '@angular/core';
import { Developer } from './developer.model';

@Component({
  selector: 'app-sviluppatori',
  templateUrl: './sviluppatori.component.html',
  styleUrls: ['./sviluppatori.component.css']
})
export class SviluppatoriComponent {

  nomeSviluppatore: string = "";

  permettiCreazione: boolean = false;

  nomeDeveloper: string = "";
  linguaggio: string = "";
  progettoAssegnato: string;

  developer: Developer;

  // Custom Type
  // animaleDom: {
  //   nome: string,
  //   razza: string,
  //   eta: number,
  //   zampe: number
  // };

  constructor(){
    setTimeout( () =>{
      this.permettiCreazione = true;
    }, 5000);
  }


  onModNomeDev(event:any){
    console.log(event);
    console.log(event.target.value);

    // this.nomeSviluppatore = event.target.value;
    this.nomeSviluppatore = (<HTMLInputElement>event.target).value;
  }

  onCreaDev(){
   this.developer = {
      nome: this.nomeDeveloper,
      linguaggio: this.linguaggio,
      progetto: this.progettoAssegnato
    }

    console.log(this.developer);

    // this.animaleDom = {
    //  nome: "Fido",
    //  eta: 3,
    //  zampe: 4,
    //  razza: "Non def"
    // }
  }
}
