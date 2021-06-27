import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SigninPageRoutingModule } from './signin-routing.module';
import { SigninPage } from './signin.page';


@NgModule({
  imports: [
    SharedModule,
    SigninPageRoutingModule
  ],
  declarations: [SigninPage]
})
export class SigninPageModule {}
