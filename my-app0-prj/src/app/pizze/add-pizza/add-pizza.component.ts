import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent{

  idPizza: number;
  nomePizza: string;
  prezzoPizza: number;

  pizza: Pizza;

  onAddPizza(){
    // this.pizza = new Pizza (this.idPizza, this.nomePizza, this.prezzoPizza);
  }



}
