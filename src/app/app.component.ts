import { Component } from '@angular/core';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rememberMe = false;

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }
}
