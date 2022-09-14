import { AppUser } from './AppUser';
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
        tap((res: LoginResponse) => {
            localStorage.setItem('Love_Wicks_App',res.access_token);
        }));
  }
  register(name:string,address:string,email:string,phone:string,password:string): Observable<AppUser>
  {
    return this.httpClient.post<AppUser>('http://localhost:8080/api/signup',{name,address,email,phone,password}).pipe(
        tap((createUser: AppUser) => console.log("User {} Created",createUser.name))
        )
  }
}          

