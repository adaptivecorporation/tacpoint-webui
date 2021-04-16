import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocal(data){
    localStorage.setItem('user', JSON.stringify(data));
  }

  setToken(token){
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(){
    return JSON.parse(localStorage.getItem('token'));
  }

}
