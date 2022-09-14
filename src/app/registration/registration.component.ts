import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    address: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.email,Validators.required]),
    phone: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required,Validators.minLength(6)])
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  register()
  {
    if(this.form.valid)
    {
      console.log("Good Form")
    }
  }
  get name(): FormControl{
    return this.form.get('name') as FormControl;
  }
  get address(): FormControl{
    return this.form.get('address') as FormControl;
  }
  get email(): FormControl{
    return this.form.get('email') as FormControl;
  }
  get phone(): FormControl{
    return this.form.get('phone') as FormControl;
  }
  get password(): FormControl{
    return this.form.get('password') as FormControl;
  }

}
