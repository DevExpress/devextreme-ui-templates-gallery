import { Component, NgModule } from '@angular/core';


import { CardAuthModule, ResetPasswordFormModule } from 'src/app/components';

@Component({
  selector: 'app-auth-reset-password',
  templateUrl: './auth-reset-password.component.html',
  styleUrls: ['./auth-reset-password.component.scss']
})
export class AuthResetPasswordComponent {

  defaultLink = '/signin-form-page';

  buttonLink = '/reset-password-form-page';

  constructor() { }

}

@NgModule({
  imports: [
    CardAuthModule,
    ResetPasswordFormModule,
  ],
  providers: [],
  exports: [AuthResetPasswordComponent],
  declarations: [AuthResetPasswordComponent],
})
export class AuthResetPasswordModule { }

