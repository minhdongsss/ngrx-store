import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htpp: HttpClient) { }
  login = ({userName, passWord}) => this.htpp.post('/login', {
    userName,
    passWord
  });
}
