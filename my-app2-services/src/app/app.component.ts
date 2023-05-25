import { Component, OnInit } from '@angular/core';
import { PrimoService } from './services/primo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = '';

  //vado nel component che deve utilizzare il servizio e inietto le dipendenze
  //a che serve il private ?
  constructor(private primoServ: PrimoService){
    //prendo una funzionalità
    primoServ.scriviInConsole();

    //prendo un dato
    console.log("Questa app è stata sviluppata da: ", primoServ.developer);

  }

  ngOnInit(): void {
    this.title = this.primoServ.avviso
  }

}
