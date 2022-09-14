import { AppUser } from './../../../AppUser';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClientService } from '../../../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  
  @Input()
  user: AppUser

  @Output()
  userAddedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addUser() {
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
