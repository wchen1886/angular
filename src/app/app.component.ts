import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'a-app';
  country: any;
  constructor(
    private _http: HttpClient
  ) {}


ngOnInit(): void {
const postData = [
  {
    "id": 2,
    "username": "wen111",
    "firstName": "wen",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
  }
];

// request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
this.postUsers(postData).subscribe(res => {
  console.log(res);
  this.getUser(postData[0].username).subscribe(name=> {
    console.log(name)
  });
});

}

public postUsers(data: any): Observable<any> {
  return this._http.post('https://petstore.swagger.io/v2/user/createWithArray', data, 
  { headers: {'Content-Type': 'application/json'}}
  );
}


public getUser(userName: string): Observable<any> {
  return this._http.get('https://petstore.swagger.io/v2/user/wen111',  
  { headers: {'Content-Type': 'application/json'}}
  );
}

onReceive(evt: any) {
  this.country = evt;
  console.log(evt)
}


}
