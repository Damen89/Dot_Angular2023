import { Component, OnInit } from '@angular/core';
import { Corso } from '../models/corso.model';
import { CorsiService } from '../shared/corsi.service';

@Component({
  selector: 'app-corsi',
  templateUrl: './corsi.component.html',
  styleUrls: ['./corsi.component.css']
})
export class CorsiComponent implements OnInit {

  listaCorsi: Corso[] = []

  constructor(private corsiServ: CorsiService){}

  ngOnInit(): void {
    this.corsiServ.getCorsi().subscribe(
      (corsi)=>{
        console.log(corsi);
        this.listaCorsi = corsi;
      }
    )
  }
}
