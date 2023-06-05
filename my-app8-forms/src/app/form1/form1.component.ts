import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {

  @ViewChild('mioForm') formRegistrazione : NgForm;

  utente = {
    nome: "",
    cognome: "",
    indirizzo: "",
    citta: "",
    telefono: ""
  }

  submittedForm: boolean = true;

  onSubmit(form: NgForm){
    console.log(form);
    console.log(this.formRegistrazione.form.value);

    if(form.status == "VALID"){

      console.log(this.submittedForm);
      this.utente.nome = this.formRegistrazione.value.userData.nome;
      this.utente.cognome = form.form.value.userData.cognome;
      this.utente.citta = this.formRegistrazione.value.userAddress.citta;
      this.utente.indirizzo = this.formRegistrazione.value.userAddress.indirizzo;
      this.utente.telefono = this.formRegistrazione.value.userAddress.telefono;
      this.submittedForm = true;
    }else{
      this.submittedForm = false;
      console.log(this.submittedForm);

    }
  }

}
