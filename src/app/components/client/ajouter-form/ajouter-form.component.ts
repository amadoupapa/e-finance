import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-ajouter-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajouter-form.component.html',
  styleUrl: './ajouter-form.component.scss'
})
export class AjouterFormComponent {
  constructor(private fb:FormBuilder, private appService:AppService){}
  ajouterForm = this.fb.group([])
createClient() {
throw new Error('Method not implemented.');
}

}
