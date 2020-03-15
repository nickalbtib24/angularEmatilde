import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationClientService implements CanActivate {
  
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    let prof = this.Token.getProfile();
    if(prof === '2'){
      return true;
    }
    return false;
    
  }

  constructor(private Token : TokenService) { }
}
