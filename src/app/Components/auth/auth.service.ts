import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject = new BehaviorSubject<any>(null);
  private loggedIn = new BehaviorSubject<any>(false);
  private message : string;

  get currentUser() {
    return this.currentUserSubject.asObservable();
  }

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  get getMessage(){
    return this.message;
  }

  constructor(private router:Router) { }




 
  login(objUserDetails: any) {
       if (objUserDetails.id == 0 && objUserDetails.id == null) {
      localStorage.removeItem("userDetails");
      this.currentUserSubject.next(null);
      this.loggedIn.next(false);
      this.message = "Please enter valied user name password !!";

    } else {
      this.currentUserSubject.next(objUserDetails);
      this.message = "";
      localStorage.setItem("userDetails", JSON.stringify(objUserDetails));
      this.loggedIn.next(true);
     // this.router.navigate(['/main/mainpage']);
    }
  }

  
  logout() {
    localStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['auth/login/otplogin']);
  }

  // git remote add origin https://git143pankaj.github.io/agfacloudFilms

  // ng build --prod --baseHref https://git143pankaj.github.io/agfacloudFilms/

  // import {HashLocationStrategy, LocationStrategy} from '@anguar/common';
  // {provide:LocationStrategy, useClass, HashLocationStrategy}


}


