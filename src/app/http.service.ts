import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url:any;

  constructor(private http:HttpClient) {
    this.url = new Map();
    this.url.set("login","http://demo8035180.mockable.io/login");
   }

  public post(iKey:string, iJson:any) {
    this.http.post(this.url.get(iKey),iJson).subscribe(
      data => {
        alert("success");
      },
      error => {
        alert("Error");
      }
    );
  }
}
