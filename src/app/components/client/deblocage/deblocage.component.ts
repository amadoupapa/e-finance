import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deblocage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './deblocage.component.html',
  styleUrl: './deblocage.component.scss'
})
export class DeblocageComponent {
numClient: any;
nomClient: any;
statut: any;
debloquer() {
throw new Error('Method not implemented.');
}

}
