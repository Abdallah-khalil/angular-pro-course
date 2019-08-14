import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { FormsModule } from '@angular/forms';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
@NgModule({
  declarations: [AuthFormComponent, AuthRememberComponent],
  imports: [CommonModule, FormsModule],
  exports: [AuthFormComponent, AuthRememberComponent]
})
export class AuthFormModule {}
