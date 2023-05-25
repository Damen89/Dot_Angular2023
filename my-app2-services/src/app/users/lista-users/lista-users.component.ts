import { Component, OnInit } from '@angular/core';
import { GestioneUsersService } from 'src/app/services/gestione-users.service';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.css']
})
export class ListaUsersComponent implements OnInit{

  listaUsers: {
    username: string,
    role: string
  }[] = [];


  constructor(private userServ: GestioneUsersService){

  }

  ngOnInit(): void {
    this.listaUsers = this.userServ.listaUtenti;
  }
}
