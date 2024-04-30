import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgIf,AsyncPipe],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  notification$!: Observable<string>;
  constructor(private appService:AppService){
    
  }

  ngOnInit(): void {
      this.notification$ = this.appService.getNotification()
  }
  hideNotification() {
    this.appService.hideNotification();
  }

}
