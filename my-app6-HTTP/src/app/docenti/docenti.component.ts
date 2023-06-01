import { Component, OnInit } from '@angular/core';
import { DocentiService } from '../shared/docenti.service';

@Component({
  selector: 'app-docenti',
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.css']
})
export class DocentiComponent implements OnInit {

  constructor(private docServ: DocentiService){

  }

  ngOnInit(): void {
    this.docServ.getDocente();
    this.docServ.getDocenti();
  }
}
