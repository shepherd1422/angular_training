import { Component, inject } from '@angular/core';
import {  NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { User } from "../interface";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})

export class UsersListComponent {
  readonly ApiService = inject(HttpClient);

  users: User[] = [];
 
  constructor() {
    this.ApiService.get<User>('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: any) => {
        this.users = response;
        console.log('Users: ', this.users )
      }
    )
  }

  deleteUser(id: number) {
    this.users = this.users.filter(
      (el: User) => {
        if(el.id === id) {
          return false
        }else {return true}
      }
    )
  }

}