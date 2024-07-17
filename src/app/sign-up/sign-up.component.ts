import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  newUser: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  isSubmitted = false;
  onSubmit(): void {
    console.log(this.newUser);
    this.isSubmitted = true;
  }
}
