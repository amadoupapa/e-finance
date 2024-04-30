import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLoginPage!: boolean;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Vérifie si la route correspond à la page de login
        if (event.url === '/login' || '/register') {
          console.log('Vous êtes sur la page de login.');
          this.isLoginPage = true;
        } else this.isLoginPage = false;
      }
    });
  }
}
