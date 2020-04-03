import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private baseUrl = 'http://localhost:8000/api';

  //private baseUrl = 'https://ematilde.us-south.cf.appdomain.cloud/api';

  private iss = {
    login : `${this.baseUrl}/login`,
    signup : `${this.baseUrl}/signup`,
  }
  constructor() { }

  handle(token, user, profile){
    this.set(token, user, profile)

  }

  set(token, user, profile){
    localStorage.setItem('token',token)
    localStorage.setItem('user', user)
    localStorage.setItem('profile',profile)
  }


  get(){
    return localStorage.getItem('token');
  }

  getUser(){
    return localStorage.getItem('user');
  }

  getProfile(){
    return localStorage.getItem('profile');
  }

  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
  }

  isValid(){
    const token = this.get();
    if ( token ) {
      const payload = this.payload(token);
      if ( payload ) {
       return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  public payload(token){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }
}
