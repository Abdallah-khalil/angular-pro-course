import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [AuthFormComponent],
  entryComponents: [AuthFormComponent]
})
export class AuthFormModule {}
