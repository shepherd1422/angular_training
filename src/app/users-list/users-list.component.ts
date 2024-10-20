import { ChangeDetectionStrategy, Component, inject, Injectable } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { UserFormComponent } from '../../assets/user-list_related/user-form/user-form.component';
import { UserApiService } from '../../assets/user-list_related/user-api.service';
import { UserService } from '../../assets/user-list_related/user.service';
import { User, UserForm } from '../../assets/user-list_related/interface';
import { UserCardComponent } from './user-card/user-card.component';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserFormComponent, AsyncPipe, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  apiService = inject(UserApiService);
  userService = inject(UserService);

  constructor() {
    this.apiService.getUsers().subscribe((response: any) => {
      this.userService.setUsers(response)
    });
  }

  editUser(user: User) {
    this.userService.editUser({
      ...user,
      company: {
        name: user.companyName
      }
    })
  }

  public createUser(formData: UserForm) {
    this.userService.createUser

    
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
  }

}
