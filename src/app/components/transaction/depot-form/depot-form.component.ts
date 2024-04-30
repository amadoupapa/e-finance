import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-depot-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './depot-form.component.html',
  styleUrl: './depot-form.component.scss'
})
export class DepotFormComponent {
  constructor(private fb:FormBuilder, private appService:AppService){}

  depotForm = this.fb.group({
    numeroCompte:["",[Validators.required]],
    montant:["",[Validators.required,Validators.maxLength(10)]],
    
  })

  createDepot(){
    if(this.depotForm.invalid){
      alert('Saisie invalid. Réessayer');
    }else{
       //TODO
       this.appService.showNotification('Depot effectue avec success')
    } 
    
  }
}
