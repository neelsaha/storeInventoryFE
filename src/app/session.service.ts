import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public isLoggedIn:boolean;
  constructor() { 
    this.isLoggedIn = false;
  }
}
