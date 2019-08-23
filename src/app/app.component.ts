import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
  ComponentRef,
  TemplateRef
} from '@angular/core';
import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { static: true, read: ViewContainerRef })
  public entry: ViewContainerRef;

  @ViewChild('tmpl', { static: true }) public tmpl: TemplateRef<any>;
  @ViewChild('templEntry', { static: true, read: ViewContainerRef })
  public templEntry: ViewContainerRef;

  public component: ComponentRef<AuthFormComponent>;

  constructor(private readonly resolver: ComponentFactoryResolver) {}

  public ctx = {
    $implicit: 'Abdallah Khalil',
    location: 'Cairo, EG'
  };

  createUser(user: User) {
    console.log('Create account', user);
  }

  ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = 'Create Account';
    this.component.instance.submitted.subscribe(this.loginUser);
    this.templEntry.createEmbeddedView(this.tmpl, {
      $implicit: 'Abdallah Khalil',
      location: 'Cairo, EG'
    });
  }

  destroyComponent(): void {
    this.component.destroy();
  }

  moveComponent(): void {
    this.entry.move(this.component.hostView, 1);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
