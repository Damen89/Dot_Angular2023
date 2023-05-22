import { Component } from '@angular/core';

@Component({
  selector: 'app-docenti',
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.css']
})
export class DocentiComponent {
  //stampa una lista di 5 Docenti di tipo Docente, alternando i colori se il docente è online oppure offline.
  //se il docente risulta offline mostra un messaggio accanto al nome "Il docente non è connesso";
}
