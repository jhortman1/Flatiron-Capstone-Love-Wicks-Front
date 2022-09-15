import { AppUser } from './../../../AppUser';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClientService } from '../../../service/http-client.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  form:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    address: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.email,Validators.required]),
    phone: new FormControl(null,[Validators.required,Validators.minLength(10)]),
    password: new FormControl(null,[Validators.required,Validators.minLength(6)])
  });
  
  @Input()
  user: AppUser

  @Output()
  userAddedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addUser() {
    if(this.form.valid)
    {
      if(this.user.id == null)
      {
        this.httpClientService.addUser(this.user).subscribe(
          (user) => {
            this.userAddedEvent.emit();
            this.router.navigate(['admin', 'users']);
          }
        );
      } else {
        this.httpClientService.updateUser(this.user).subscribe(
          (user) => {
            this.userAddedEvent.emit();
            this.router.navigate(['admin', 'users']);
          }
        );
      }
    }

  }
  get name(): FormControl{
    return this.form.get('email') as FormControl;
  }
  get address(): FormControl{
    return this.form.get('password') as FormControl;
  }
  get email(): FormControl{
    return this.form.get('email') as FormControl;
  }
  get phone(): FormControl{
    return this.form.get('password') as FormControl;
  }
  get password(): FormControl{
    return this.form.get('email') as FormControl;
  }
}
