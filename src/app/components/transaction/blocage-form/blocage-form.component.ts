import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-blocage-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blocage-form.component.html',
  styleUrl: './blocage-form.component.scss',
})
export class BlocageFormComponent {
  constructor(private appService:AppService) {}
  blocageForm: any;
  numTransaction = '';
  beneficiare = '';
  expediteur = '';
  bloquer() {
   if(this.numTransaction.length <= 0 || ''){
    this.appService.showNotification("Numero de transaction vide ou incorecte !")
   }
  }
}
