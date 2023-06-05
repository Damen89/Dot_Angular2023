import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app8-forms';
  company: string;

  ngOnInit(): void{
    this.company = "Amazon"
  }
}
