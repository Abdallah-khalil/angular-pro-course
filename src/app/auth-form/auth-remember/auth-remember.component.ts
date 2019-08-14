import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked($event.target.checked)" />
      Keep me logged in
    </label>
  `,
  styles: []
})
export class AuthRememberComponent implements OnInit {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  onChecked(value: boolean): void {
    this.checked.emit(value);
  }
  ngOnInit() {}
}
