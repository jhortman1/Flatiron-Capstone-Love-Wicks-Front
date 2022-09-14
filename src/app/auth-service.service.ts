import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from 'src/LoginResponse';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }
  login(email:string, password:string): Observable<LoginResponse>
  {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/auth/login',{email,password}).pipe(
        tap((res: LoginResponse) => localStorage.setItem('Love_Wicks_App',res.access_token)));
  }

}          

