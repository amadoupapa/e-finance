import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private fb:FormBuilder, private router:Router){}
  loginForm = this.fb.group({
    email:["",[Validators.email,Validators.required]],
    password:["",[Validators.minLength(5),Validators.required]]
  })
  

  login(){
   const formData = this.loginForm.value
   this.router.navigate([''])
   //TODO 
  }


}
