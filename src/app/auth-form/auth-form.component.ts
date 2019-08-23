import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <h3>{{ title }}</h3>
        <label>
          Email address
          <input type="email" name="email" ngModel #email />
        </label>

        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>

        <button type="submit">{{ title }}</button>
      </form>
    </div>
  `
})
export class AuthFormComponent {
  public title = 'login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  constructor() {}

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
