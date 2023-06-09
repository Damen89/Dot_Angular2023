import { Component } from '@angular/core';
import { Docente } from './model/docente.model';

@Component({
  selector: 'app-docenti',
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.css']
})
export class DocentiComponent {
  //stampa una lista di 5 Docenti di tipo Docente, alternando i colori se il docente è online oppure offline.
  //se il docente risulta offline mostra un messaggio accanto al nome "Il docente non è connesso";

  elencoDocenti: Docente[] = [
    {
      id:0,
      nome: "Steve Wozniak",
      presenza: true,
      materia: "Ingegneria elettronica"
    },
    {
      id: 1,
      nome: "Grace Hopper",
      presenza: false,
      materia: "Cobol"
    },
    {
      id: 2,
      nome: "Alan Turing",
      presenza: true,
      materia: "Ingegneria del Software"
    }
  ];

}
