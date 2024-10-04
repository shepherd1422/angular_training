import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SenderComponentComponent } from './sender-component/sender-component.component';
import { RecieverComponentComponent } from './reciever-component/reciever-component.component';
import { RegisterComponent } from './register/register.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SenderComponentComponent,HeaderComponent, RecieverComponentComponent, RegisterComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employee-registration';
  message: string = ''

  recieveMessage($event: string) {
    this.message = $event
  }
}
