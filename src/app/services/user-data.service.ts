import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import {User} from '../components/user/users';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  heroesUrl = "https://api.github.com/search/users?q=tom";
  users:any;
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
   }


  getHeroes (): Observable<User[]> {
    console.log("API response below:    ");
    let obs = this.http.get('https://api.github.com/search/users?q=tom',this.httpOptions);
     obs.subscribe(users => { console.log(users)});
    return this.http.get<User[]>("https://api.github.com/search/users?q=tom",this.httpOptions);
      
  }
}
