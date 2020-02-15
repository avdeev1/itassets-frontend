import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login = '';
  private password = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  auth() {
    console.log(this.login, this.password);
    const bodyJson = JSON.stringify({
      username: this.login,
      password: this.password,
    });
    this.http.post('/login', bodyJson).subscribe(res => {
      console.log(res);
    });
  }

}
