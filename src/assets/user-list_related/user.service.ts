import { Injectable } from '@angular/core';
import { User } from './interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public usersSubject = new BehaviorSubject<User[]>([]);

  setUsers(users: User[]) {
    this.usersSubject.next(users.slice(0, 4))
  }

  editUser(editedUser: User) {
    this.usersSubject.next(
      this.usersSubject.value.map((user) => 
      user.id === editedUser.id ? editedUser : user)
    )
  }

  createUser(user: User) {
    const userIsExisting = this.usersSubject.value.find(
      (currentElement) => currentElement.email === user.email
    );

    if (userIsExisting !== undefined) {
      alert('User already exist');
    } else {
      alert('User is added');
      this.usersSubject.next([...this.usersSubject.value, user]);
    }
  }

  deleteUser(id: number) {
    this.usersSubject.next(
      this.usersSubject.value.filter((el) => {
        if (id === el.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}

