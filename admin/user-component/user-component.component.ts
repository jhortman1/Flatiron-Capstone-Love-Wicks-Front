import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../AppUser';
import { HttpClientService } from '../../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  users: Array<AppUser>;
  selectedUser: AppUser;
  action: string;

  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: AppUser[]) {
    this.users = response;
  }

}
