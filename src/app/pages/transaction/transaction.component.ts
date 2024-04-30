import { Component } from '@angular/core';
import { SubNavComponent } from "../../components/sub-nav/sub-nav.component";
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-transaction',
    standalone: true,
    templateUrl: './transaction.component.html',
    styleUrl: './transaction.component.scss',
    imports: [SubNavComponent, RouterOutlet, NgFor]
})
export class TransactionComponent {
  listNav = [
    {menuPath:"depot", buttonName:"Depot"},
    {menuPath:"blocage", buttonName:"Bloquer"},
    {menuPath:"deblocage", buttonName:"Debloquer"},
    {menuPath:"annulation", buttonName:"Annuler"}
  ]

}


