import { Injectable } from '@angular/core';
import { Libro } from '../model/libro.model';
import { GestioneUsersService } from './gestione-users.service';

@Injectable({
  providedIn: 'root'
})
export class GestioneBibliotecaService {

  private listaLibri: Libro[] = [
    {
      autore: "Philip K. Dick",
      titolo: "Ubik",
      prezzo: 10.30
    },
    {
      autore: "Stendhal",
      titolo: "Il rosso e il nero",
      prezzo: 23
    },
    {
      autore: "Calvino",
      titolo: "Il visconte dimezzato",
      prezzo: 8.90
    }
  ];

  constructor(private gestUserServ: GestioneUsersService) { }

  getListaLibri(){
    if(this.gestUserServ.utenteAttivo.role === "Admin"){
      return this.listaLibri
    }else{
      return "Non puoi accedere ai libri, non sei autorizzato !!";
    }
  }


  getListaLibriPerRuolo(username: string){
    let utenteOnline = this.gestUserServ.getUserByName(username);

    if(utenteOnline.role === "SuperAdmin"){
      return this.listaLibri;
    }else if(utenteOnline.role === "Base"){
      return this.listaLibri[0];
    }else{
      return "Non puoi accedere ai libri, non sei autorizzato !!";
    }
  }
}
