import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private showNotificationSubject: Subject<string> = new Subject<string>();
 

  constructor() { }
  
   
  // Méthode pour afficher la notification
  showNotification(message: string) {
    this.showNotificationSubject.next(message);
    setTimeout(()=>{
      this.hideNotification()
    },5000)
    
  }

  // Méthode pour cacher la notification
  hideNotification() {
    this.showNotificationSubject.next('');
    
  }

  // Observable pour observer les changements dans l'affichage de la notification
  getNotification(): Observable<string> {
    return this.showNotificationSubject.asObservable();
  }
}
