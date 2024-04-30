import { Component, OnInit } from '@angular/core';
import { SubNavComponent } from '../../components/sub-nav/sub-nav.component';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { Utilisateur } from '../../models/user.model';
import { fakeUsers } from '../../fake';


@Component({
  selector: 'app-client',
  standalone: true,
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
  imports: [SubNavComponent, RouterOutlet, NgFor],
})
export class ClientComponent {

  
  listNav = [
    { menuPath: 'liste', buttonName: 'Liste Clients' },
    { menuPath: 'inscription', buttonName: 'Inscrire' },
    { menuPath: 'modification', buttonName: 'Modifier' },
    { menuPath: 'deblocage', buttonName: 'Debloquer' },
    { menuPath: 'blocage', buttonName: 'Bloquer' },
  ];




}

