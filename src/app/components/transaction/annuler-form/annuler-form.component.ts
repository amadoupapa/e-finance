import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-annuler-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './annuler-form.component.html',
  styleUrl: './annuler-form.component.scss'
})
export class AnnulerFormComponent {
  constructor(private appService:AppService){}
numTransaction = '';
annulerTransaction() {
throw new Error('Method not implemented.');
}

}
