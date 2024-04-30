import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  isLoginPage!: boolean;
  constructor(private router:Router){this.checkLogin()}
  ngOnInit(): void {
    this.checkLogin()
    
  }

  checkLogin(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Vérifie si la route correspond à la page de login
        if (event.url === '/login' || '/register') {
          console.log('Vous êtes sur la page de login.');
          this.isLoginPage = true
          
        }else this.isLoginPage = false
      }
    });
  }

}
