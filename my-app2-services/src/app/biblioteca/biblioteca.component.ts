import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/libro.model';
import { GestioneBibliotecaService } from '../services/gestione-biblioteca.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit{

  username: string;
  elenco: Libro[] | Libro | string;


  constructor(private gestBiblioServ: GestioneBibliotecaService){

  }

  onMostraListaLibri(){
    // console.log(this.gestBiblioServ.getListaLibri());
    this.gestBiblioServ.getListaLibriPerRuolo(this.username);

    if(typeof this.gestBiblioServ.getListaLibriPerRuolo(this.username)['length']  == 'number'){
      this.elenco = this.gestBiblioServ.getListaLibriPerRuolo(this.username);
    }

    console.log(this.elenco);


  }

  ngOnInit(): void {
  // console.log(this.gestBiblioServ.getListaLibriPerRuolo("Laura"));

  }
}
