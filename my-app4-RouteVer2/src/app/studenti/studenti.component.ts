import { Component, OnInit } from '@angular/core';
import { Studente } from '../models/studente.model';
import { StudentiService } from './studenti.service';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {

  listaStudenti: Studente[] = [];

  constructor(private studServ: StudentiService){

  }

  ngOnInit(): void {
    this.listaStudenti = this.studServ.getStudenti();
  }
}
