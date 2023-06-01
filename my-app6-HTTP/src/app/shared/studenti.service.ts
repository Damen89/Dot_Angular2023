import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs'
import { Studente } from '../models/studente.model';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  constructor(private http: HttpClient) { }


  //ENDPOINT: dietro questa posizione ci sono dati formato JSON

  url: string = "http://localhost:3000/studenti";


  getStudenti(){
    return this.http.get<Studente[]>(this.url);
  }

  // getStudenti2(){
  //   this.http.get<any[]>(this.url).subscribe(
  //     studenti => {
  //       this.listaStudenti = studenti
  //     }
  //   )
  //   return this.listaStudenti;
  // }

  postStudente(nome: string, cognome: string){
    const studentePost: Studente = new Studente(nome, cognome);

    this.http.post(
      this.url,  //endpoint
      studentePost  //bodyRequest
    ).subscribe(
      responData =>{
        console.log(responData);
      }
    )
  }

  deleteStudente(id: number){
    return this.http.delete(this.url+"/"+id).subscribe();
  }

}
