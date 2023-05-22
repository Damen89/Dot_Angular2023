import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //proprietà di classe
  title = 'my-app0-intro';
  autore: string = "Dario";
  corso:string = "Angular 2023";
  numPartecipanti: number = 9;
  ente = "DotAcadmy";

}
