import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  
  {
    if(sessionStorage.getItem("AUTH_TOKEN") != null)
    {
      console.log("Message from canActivate method - AuthGuard Service");
      return true;
    }
    else
    {
      // this.router.navigate(['/Login']);
      this.router.navigate(["/Login"], {queryParams : {"returnUrl":state.url}});
      return false;
    }
  }
}
