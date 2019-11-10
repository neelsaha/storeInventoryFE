import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../assets/css/AdminLTE.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService:HttpService) { }

  ngOnInit() {
  }

  public onSubmit(data){
    var email = data.email;
    var password = data.password;
    var jsonData = {
      "email": email,
      "password": password
    };
    this.httpService.post("login",jsonData);
  }

}
