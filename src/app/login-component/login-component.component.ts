// import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  form:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required,Validators.minLength(6)])
  });

  constructor(private authService: AuthServiceService, private router: Router) {}
  ngOnInit(): void {}

    login() {
      if(this.form.valid)
      {
        this.authService.login(this.email.value,this.password.value).pipe(
          tap(()=> this.router.navigate(['/shop']))
        ).subscribe()
      }
  }
  get email(): FormControl{
    return this.form.get('email') as FormControl;
  }
  get password(): FormControl{
    return this.form.get('password') as FormControl;
  }
}
