import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Gioco } from 'src/app/model/gioco.model';

@Component({
  selector: 'app-lista-giochi',
  templateUrl: './lista-giochi.component.html',
  styleUrls: ['./lista-giochi.component.css']
})
export class ListaGiochiComponent implements OnChanges{

 @Input() gioco: Gioco;

 listaGiochi: Gioco[] = [
    new Gioco("Monopoly", "tavolo", 0, "https://m.media-amazon.com/images/I/915r7CzlwxL._AC_SL1500_.jpg"),
    new Gioco("Fifa", "online", 0, "https://sm.ign.com/t/ign_it/screenshot/default/mbappe-lores-wm-16x9_yeej.1280.jpg"),
    new Gioco("Arkanoid", "videogame", 0, "https://www.player.it/wp-content/uploads/2018/02/ARKANOID.jpg"),
  ];

  onLike(gioco: Gioco){
    // gioco.voto++;
    gioco.like();
  }

  onDislike(gioco: Gioco){
    // gioco.voto--;
    gioco.dislike();
  }

  ngOnChanges(): void {
    if(this.gioco != null){
      this.listaGiochi.push(this.gioco)
    }
  }
}
