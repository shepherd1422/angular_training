import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '/Users/shokhrukhabdulakimov/employee-registration/src/app/interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }
}
