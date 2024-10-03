import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  userApiService = inject(UserService);

  constructor() {
    this.userApiService.getUsers().subscribe((data: any) => {
      this.userApiService.setUsers(data)
    });
  }
}
