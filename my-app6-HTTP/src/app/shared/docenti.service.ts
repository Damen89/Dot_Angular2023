import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Docente } from '../models/docente.model';

@Injectable({
  providedIn: 'root'
})
export class DocentiService {

  docente: Docente;

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/docenti";
  //recupero un singolo docente
  getDocente(){
    this.http.get<Docente>(this.url+"/0")
    .pipe(
      map(
        docenteDB =>{
          return new Docente(
            docenteDB['nomeDocente'],
            docenteDB['materiaDocente'],
            docenteDB['id']
          )
        }
      )
    ).subscribe(
      docente =>{
        console.log(docente);
      }
    )
  }

  getDocenti(){
    this.http.get<Docente[]>(this.url)
    .pipe(
      map(
        (docentiDB: object[]) =>{
          let listaDocenti: Docente[] = [];

          docentiDB.forEach(doc => {
            let docente = new Docente(
              doc['nomeDocente'],
              doc['materiaDocente'],
              doc['id']
            );

            listaDocenti.push(docente);
          });
          return listaDocenti;

        }
      )
    ).subscribe(
      docenti=>{
        console.log(docenti);
      }
    )


  }



}
