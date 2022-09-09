import { AppUser } from './../AppUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  getUsers()
  {
    return this.httpClient.get<AppUser[]>('http://localhost:8080/api/users');
  }
}
