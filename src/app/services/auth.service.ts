import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private estConnecte:boolean = false;

  constructor(private router:Router) { }

  // public  authenticate(email:String, password:String){
  //    if(email == "test@test.com" && password == "test"){
  //     sessionStorage.setItem("isLoggedIn","true")
  //    }
  // }

  // public  checkLogin(){
  //    var isLoggedIn = sessionStorage.getItem("isLoggedIn")?.valueOf();
  //   if(isLoggedIn != null && isLoggedIn == "true"){
  //     this.estConnecte = true
       
  //   }else {
  //     alert("Vous n'etes pas authentifie");
  //     this.router.navigate(['login'])
  //   }
  // }

  // public logout(){
  //   sessionStorage.removeItem("isLoggedIn")
  //   this.estConnecte = false
  // }
}
