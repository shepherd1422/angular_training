import { Component, inject } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MAT_DIALOG_DATA, MatDialogClose } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { NgIf } from "@angular/common";
import { MatInputModule } from "@angular/material/input";

export function yesNoValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === "yes" || value === "no") {
      return null;
    }
    return { returnInvalid: true };
  };
}

@Component({
  selector: "app-edit-user-dialog",
  standalone: true,
  imports: [
    NgIf,
    MatButtonModule,
    MatCardModule,
    MatDialogClose,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: "./edit-user-dialog.component.html",
  styleUrl: "./edit-user-dialog.component.scss",
})
export class EditUserDialogComponent {
  public data = inject(MAT_DIALOG_DATA);

  public fb = inject(FormBuilder);

  public form = this.fb.group({
    name: this.fb.control(this.data.user.name, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: this.fb.control(this.data.user.email, [
      Validators.required,
      Validators.email,
    ]),
    website: this.fb.control(this.valueToBoolean(this.data.user.website), [
      Validators.required,
      yesNoValidator(),
    ]),
    companyName: this.fb.control(this.data.user.companyName, [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  private valueToBoolean(value: boolean) {
    return value ? "yes" : "no";
  }

  public getCompletedValue() {
    const result = this.form.value.website;
    if (result === "yes") {
      return true;
    }
    return false;
  }

  get updatedUser() {
    return {
      ...this.form.value,
      id: this.data.user.id,
      website: this.getCompletedValue(),
    };
  }
}
