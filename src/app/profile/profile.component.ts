import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { OAuthService } from '../auth/oauth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(
    protected oAuthService: OAuthService,
    protected userService: UserService
  ) {

  }
}
