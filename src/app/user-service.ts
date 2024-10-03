import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from "./interface";

@Injectable({ providedIn: 'root' })

export class UserService {
  readonly apiService = inject(HttpClient);
  public usersSubject = new BehaviorSubject<User[]>([]);

  getUsers() {
    return this.apiService.get('https://jsonplaceholder.typicode.com/users');
  }

  setUsers(users: User[]) {
    this.usersSubject.next(users);
  }
}
