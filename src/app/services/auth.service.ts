import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(username, password){
    return this.http.post(Constants.AUTH_LOGIN, {"username": username, "password": password})
  }

  
}
