import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sub-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sub-nav.component.html',
  styleUrl: './sub-nav.component.scss'
})
export class SubNavComponent {
  constructor(private router:Router){}

  @Input()
  navPath = "";
  @Input()
  buttonName = ""

  navigate(){
    this.router.navigate([this.navPath])
    //alert('msg');
  }



}
