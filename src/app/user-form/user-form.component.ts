import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  @Output()
  public createUser = new EventEmitter

  public fb = inject(FormBuilder);

  public form = this.fb.group({
    name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    website: this.fb.control('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    companyName: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  onSubmit(): void {
    this.createUser.emit(this.form.value);
  }
}
