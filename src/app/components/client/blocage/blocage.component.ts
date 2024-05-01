import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Utilisateur } from '../../../models/user.model';
import { fakeUsers } from '../../../fake';

@Component({
  selector: 'app-blocage',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './blocage.component.html',
  styleUrl: './blocage.component.scss',
})
export class BlocageComponent {
  isClientFound = false;
  listeClient = fakeUsers;
  client!: Utilisateur | undefined;
  constructor(private fb: FormBuilder) {
    
  }
  numClient = new FormControl();
  nomClient = '';

  getClientById(id: Number) {
    this.client = this.listeClient.find((c) => c.id == id);
    if (this.client) {this.isClientFound = true;
      this.nomClient = this.client.prenom + " "+ this.client.nom
      alert(this.client.nom);
    }
    else{ this.isClientFound = false;
      alert("Not found")
    }
  }
  bloquer() {
    this.getClientById(this.numClient.value)
    
  }
}
