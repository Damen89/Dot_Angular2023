import { Component } from '@angular/core';
import { Gioco } from '../model/gioco.model';

@Component({
  selector: 'app-giochi',
  templateUrl: './giochi.component.html',
  styleUrls: ['./giochi.component.css']
})
export class GiochiComponent {

  nuovoGioco: Gioco;

  onCreaGioco(gioco: Gioco){
    console.log(gioco);
    this.nuovoGioco = gioco;
  }
}
