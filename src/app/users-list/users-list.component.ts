import { Component, inject, Injectable } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserApiService } from '../user-api.service';
import { UserService } from '../user.service';
import { UserForm } from '../interface';
import { UserCardComponent } from './user-card/user-card.component';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserFormComponent, AsyncPipe, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  apiService = inject(UserApiService);
  userService = inject(UserService);

  constructor() {
    this.apiService.getUsers().subscribe((response: any) => {
      this.userService.setUsers(response)
    });
  }

  public createUser(formData: UserForm) {
    this.userService.createUser

    
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
  }

}
