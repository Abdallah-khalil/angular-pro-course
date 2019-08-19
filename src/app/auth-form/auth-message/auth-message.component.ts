import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-message',
  template: `
    <div>You will be logged in for {{ days }} days</div>
  `,
  styles: []
})
export class AuthMessageComponent implements OnInit {
  public days = 7;
  constructor() {}

  ngOnInit() {}
}
