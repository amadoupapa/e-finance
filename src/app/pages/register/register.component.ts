import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private fb:FormBuilder, private router:Router){}
  registerForm = this.fb.group({})

  register(){
    //TOBE IMPLEMTED
    this.router.navigate([''])
  }

}
