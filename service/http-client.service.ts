import { Candle } from './../Candle';
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
  addUser(newUser: AppUser) {
    return this.httpClient.post<AppUser>('http://localhost:8080/api/signup', newUser);   
  }
  deleteUser(id:number) {
    return this.httpClient.delete<AppUser>('http://localhost:8080/api/user/' + id);
  }
  getCandles() {
    return this.httpClient.get<Candle[]>('http://localhost:8080/api/candles');
  }
}
