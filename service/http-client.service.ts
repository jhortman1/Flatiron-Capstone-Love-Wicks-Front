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
  updateUser(updatedUser: AppUser) {
    return this.httpClient.put<AppUser>('http://localhost:8080/api/user/'+updatedUser.id, updatedUser);
  }
  deleteUser(id:number) {
    return this.httpClient.delete<AppUser>('http://localhost:8080/api/user/' + id);
  }
  getCandles() {
    return this.httpClient.get<Candle[]>('http://localhost:8080/api/candles');
  }
  addCandle(newCandle: Candle) {
    return this.httpClient.post<Candle>('http://localhost:8080/api/candle', newCandle);
  }
  deleteCandle(id:number) {
    return this.httpClient.delete<Candle>('http://localhost:8080/api/candle/' + id);
  }
  updateCandle(updatedCandle: Candle) {
    return this.httpClient.put<Candle>('http://localhost:8080/api/candle/'+updatedCandle.id, updatedCandle);
  }
}
