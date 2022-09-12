import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../../AppUser';
import { HttpClientService } from '../../../service/http-client.service';
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
      this.refreshData();
     }
   
     refreshData() {
       this.httpClientService.getUsers().subscribe(
         response => this.handleSuccessfulResponse(response),
       );
   
       this.activatedRoute.queryParams.subscribe(
        (params) => {
          this.action = params['action'];
          const selectedUserId = params['id'];
          if (selectedUserId) {
            this.selectedUser = this.users.find(user => user.id === +selectedUserId) as AppUser;
          }
        }
      );
    }

  handleSuccessfulResponse(response: AppUser[]) {
    this.users = response;
  }

  viewUser(id: number) {
    this.router.navigate(['admin','users'], {queryParams : {id, action: 'view'}});
  }
  
  addUser() {
    this.selectedUser = new AppUser();
    this.router.navigate(['admin', 'users'], { queryParams: { action: 'add' } });
  }

}
