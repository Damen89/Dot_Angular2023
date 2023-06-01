import { Component, OnInit } from '@angular/core';
import { Studente } from '../models/studente.model';
import { StudentiService } from '../shared/studenti.service';

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
    this.studServ.getStudenti().subscribe(
      studenti =>{
        this.listaStudenti = studenti;
        console.log(studenti);
      }
    );
  }


  onAddStud(){
    this.studServ.postStudente("Paolo", "Bianchi");
    this.ngOnInit();
  }

  onDeleteStud(){
    this.studServ.deleteStudente(1);
    this.ngOnInit();
  }
}
