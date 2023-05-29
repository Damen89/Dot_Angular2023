import { Injectable } from '@angular/core';
import { Studente } from '../models/studente.model';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  private studenti: Studente[] = [
    {
      id:0,
      nome: "Paola Bianchi",
      corso: "Angular",
      status: true
    },
    {
      id:1,
      nome: "Luca Verdi",
      corso: "Java",
      status: false
    },
    {
      id:2,
      nome: "Claudia Rossi",
      corso: "Javascript",
      status: true
    }
  ]

  getStudenti(): Studente[] {
    return this.studenti;
  }



  constructor() { }
}
