import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '@core/interfaces/email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent {
  public email: Email;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data.subscribe(({ email }) => {
      this.email = email;
    });
  }
}
