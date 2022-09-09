import { Component, OnInit } from '@angular/core';
import { AppUser } from '../AppUser';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  users!: Array<AppUser>;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: AppUser[]) {
    this.users = response;
  }

}
