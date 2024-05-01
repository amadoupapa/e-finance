import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { fakeUsers } from '../../../fake';
import { Utilisateur } from '../../../models/user.model';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss'
})
export class ListClientsComponent implements OnInit{
  clients!:Utilisateur[];
  @Input()
  idClient!:Number;
  ngOnInit(): void {
    this.clients = fakeUsers;
}
}
