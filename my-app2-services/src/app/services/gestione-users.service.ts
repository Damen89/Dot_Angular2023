import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestioneUsersService {

  utenteAttivo: {
    username: string,
    role: string
  } = {
    username: "Laura",
    role: "Base"
  }


  listaUtenti: {
    username: string,
    role: string
  } [] = [{
      username: "Fabio",
      role: "SuperAdmin"
    },
    {
      username: "Laura",
      role: "Base"
    },
    {
      username: "Anna",
      role: "Guest"
    }
  ]

  getUserByName(username: string) {
    const user = this.listaUtenti.find(
      (user) => {
        return user.username === username;
      }
    )
    return user;
  }


  addUser(user: {username: string, role: string}){
    this.listaUtenti.push(user);
    console.log("Hai appena aggiunto", user);
  }


  constructor() {}
}
