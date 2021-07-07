import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IonInput} from '@ionic/angular';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit{
  @ViewChild('confirmation') el: IonInput;
  public form: FormGroup;
  public Secondform: FormGroup;
  public loading = false;
  public confirmPassword = false;
  public subscriptions = new Subscription();

  constructor(private fb: FormBuilder) {
  }

  get fieldNom() {
    return this.form.get('nom');
  }

  get fieldPassword() {
    return this.form.get('login').get('password');
  }

  get fieldEmail() {
    return this.form.get('login').get('email');
  }

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  ngOnInit() {
    this.formulaire();
  }

  public validatorFieldName(formControl: FormControl): { [s: string]: boolean} {
    if(formControl.value === 'paul'){
      return {notPaul: true};
    } else {
      return null;
    }
  }

  public validatorFieldPassword(formControl: FormControl): Promise<{ [s: string]: boolean}> {
    return this.el.getInputElement().then((data)=>{
      if(formControl.value !== data.value){
        return {notMatching: true};
      } else {
        return null;
      }
    });
  }

  public validatorFieldAsync(formControl: FormControl): Promise<{[s: string]: boolean} | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    });
  }

  public formulaire(): void {
    this.loading = true;
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, this.validatorFieldName], this.validatorFieldAsync ),
      login: new FormGroup({
        email: new FormControl('', [Validators.required,Validators.email]),
        password: new FormControl('', [Validators.required],  this.validatorFieldPassword.bind(this))
      }),
      hobbies: new FormArray([]),
    });

    /*this.form.addControl('nom', new FormControl(''));
    this.form.removeControl('nom');
    this.form.setControl('nom', new FormControl(''));

    this.form.get('nom');
    this.form.get('nom').setValidators();
    this.form.get('nom').clearValidators()

    this.form.patchValue({
      nom: 'Jhon Doe',
      email:'j.doe@gmail.com'
    });

    this.form.setValue({
      nom: 'Jhon Doe',
      email:'j.doe@gmail.com',
      password: '',
    });*/

    this.Secondform = this.fb.group({
      nomEntier: this.fb.group({
        prenom: ['Jean', Validators.minLength(2)],
        nom: 'Dupont',
      }),
      email: '',
    });
  }

  public formEmit() {
    this.subscriptions.add(
      this.form.statusChanges.subscribe(status => {
        console.log(status);
      })
    );

    this.subscriptions.add(
      this.form.valueChanges.subscribe(value => {
        console.log(value);
      })
    );
  }

  public addHobby(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.hobbies.push(new FormControl(''));
  }

  public deleteHobby(index: number, event): void {
    event.preventDefault();
    event.stopPropagation();
    this.hobbies.removeAt(index);
  }

  submit() {
    console.log(this.form.value);
    console.log(this.form.getRawValue());
    console.log(this.form.valid);
    console.log(this.form.invalid);
    // this.form.reset();
  }

  public checkConfirm($event: any): void {
    if($event.target.value){
      this.confirmPassword = false;
      console.log(this.confirmPassword);
    }else{
      this.confirmPassword = true;
    }
  }
}

