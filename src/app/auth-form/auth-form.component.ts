import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  ChangeDetectorRef,
  ElementRef,
  Renderer2
} from '@angular/core';

import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email />
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <ng-content select="auth-remember"></ng-content>

        <auth-message [style.display]="showMessage ? 'block' : 'none'">
        </auth-message>

        <ng-content select="button"></ng-content>
      </form>
    </div>
  `,
  styles: [
    `
      .email {
        border-color: #ddd333;
      }
    `
  ]
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;

  // When we set static to false we can't change ( manipulate )
  //  the component variables
  @ViewChild('email', { static: false })
  email: ElementRef<HTMLInputElement>;

  @ViewChildren(AuthMessageComponent)
  messages: QueryList<AuthMessageComponent>;

  constructor(
    private readonly cd: ChangeDetectorRef,
    private readonly renderer: Renderer2
  ) {}

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterViewInit(): void {
    // console.log(this.email);
    this.renderer.setAttribute(
      this.email.nativeElement,
      'placeholder',
      'Enter your email'
    );
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email');
    // this.email.nativeElement.classList.add('email');
    this.renderer.addClass(this.email.nativeElement, 'email');
    this.email.nativeElement.focus();
    if (this.messages) {
      this.messages.forEach(message => (message.days = 30));
    }
    this.cd.detectChanges();
  }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.forEach(item => {
        item.checked.subscribe(
          (remembered: boolean) => (this.showMessage = remembered)
        );
      });
    }
  }
}
