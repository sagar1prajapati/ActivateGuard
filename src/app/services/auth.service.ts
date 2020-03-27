import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    let token = localStorage.getItem("usertoken");
    if(!token){
      alert("you dont have permission")
      this.router.navigate(["login"])
    }
    return token? true:false;
  }

}
