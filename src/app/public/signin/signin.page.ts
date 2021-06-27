import {Component, OnInit, Sanitizer, SecurityContext} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {AuthService} from '../../core/services/auth.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {SigninModel} from '../../shared/models/signin-model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  public signinFormGroup: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.signinFormGroup = this.signinForm();
    this.signinConfirm();
  }

  public onSubmit(datas: SigninModel): void {
    this.signin(datas);
  }

  public signin(datas: SigninModel): void {
    this.authService.signin(datas);
  }

  public signinConfirm(): Subscription {
    return this.authService.userInfo.subscribe(
      (rep) => {
        // console.log(rep);
      }
    );
  }

  public signinForm(): FormGroup {
    return this.formBuilder.group({
      email: ['gravythomas@gmail.com', Validators.required],
      password: ['1234', Validators.required]
    });
  }

}
