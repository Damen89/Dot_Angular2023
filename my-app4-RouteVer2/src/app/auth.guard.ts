import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

//comando per generare la authGuard --> ng g guard --functional

//authGuard è il nome della funzione che andremo ad applicare alla rotta
export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthorizationService);
  const router = inject(Router);

  console.log("Sto provando ad accedere alla rotta " + route['url']);
  console.log(state);

  if(authService.checkRole()){
    //se checkRole() è true mi permetti di passare con return true
    return true;
  }else{
    //il return false non mi fa accedere alla rotta
    // return false;
    console.log("Mi dispiace non sei autorizzato");
    return router.navigate(['/login']);
  }

};


export const authGuardChild: CanActivateChildFn = ( ) =>{
  const authService = inject(AuthorizationService);
  const router = inject(Router);

  if(authService.checkRole()){
    return true;
  }else{
    // return router.navigate(['/login']);
    return router.navigate(['/no-auth']);
  }

}
