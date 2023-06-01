import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Corso } from '../models/corso.model';

@Injectable({
  providedIn: 'root'
})
export class CorsiService {

  url:string = "http://localhost:3000/corsi";

  constructor(private http: HttpClient) { }

  getCorsi(){
   return this.http.get<Corso[]>(this.url).pipe(
    map(
      (response: object[])=>{
        const corsi: Corso[] = [];

        response.forEach(c => {
          let corso = new Corso(
            c['id'],
            c['nomeCorso'],
            c['aulaCorso'],
            c['corsoDiLaurea']
          )
          corsi.push(corso);
        })
        return corsi;
      }
    )
   );
  }


}
