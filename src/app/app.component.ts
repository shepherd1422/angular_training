import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SenderComponentComponent } from '../assets/other_logic-training_stuff/sender-component/sender-component.component';
import { RecieverComponentComponent } from '../assets/other_logic-training_stuff/reciever-component/reciever-component.component';
import { RegisterComponent } from '../assets/other_logic-training_stuff/register/register.component';
import { HeaderComponent } from '../assets/header-med/header.component';
import { FooterMedComponent } from '../assets/footer-med/footer-med.component';
import { NgFor, NgIf } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';


const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterOutlet,  
    FooterMedComponent,
    SenderComponentComponent,
    HeaderComponent,
    RecieverComponentComponent,
    RegisterComponent,
    UsersListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isShowMan = true;

  newPages = newPages;

  title = 'employee-registration';

  message: string = '';

  recieveMessage($event: string) {
    this.message = $event;
  }
}
