import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  formRegistrazione: FormGroup;

  ngOnInit(): void {
    this.formRegistrazione = new FormGroup({
      'userData': new FormGroup({
        'nome': new FormControl(null,[Validators.required, this.vietaNomi.bind(this)]),
        'cognome': new FormControl(null, [Validators.pattern('[a-zA-Z ]*')])
      }),
      'userAddress': new FormGroup({
        'indirizzo': new FormControl(null,[Validators.required]),
        'citta': new FormControl(null,[Validators.required]),
        'telefono': new FormControl(null,[Validators.required]),
        'email': new FormControl(null, [Validators.required,Validators.email])
      })
    });

    this.formRegistrazione.statusChanges.subscribe(
      (status) => {console.log(status);
      }
    )

    //setValue si può utilizzare per gestire un form precompilato
    this.formRegistrazione.setValue(
      {
        'userData': {
          'nome': "Dario",
          'cognome': "Mennillo"
        },
        'userAddress': {
          'indirizzo': "Via Qualcosa",
          'citta':'Torino',
          'telefono': 1234,
          'email': 'test@mail.com'
        }
      }
    )
  }


  onSubmit(){
    console.log(this.formRegistrazione);
    // this.formRegistrazione.reset();
  }


  nomiVietati: string[] = ['Pippo', 'Paperino', 'Topolino'];

  vietaNomi(control: FormControl): {[avviso:string]: boolean}{
    if(this.nomiVietati.indexOf(control.value) != -1){
      console.log("Stai usando un nome vietato");
      return {'nomeVietato': true}
    }

    return null;
  }

}
