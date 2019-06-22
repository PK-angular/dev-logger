import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Post} from '../models/Post';
import {User} from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  heroesUrl = "https://api.github.com/search/users?q=tom";
  users:any;
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json;charset=UTF-8'
    })
  };

  constructor(private http: HttpClient) {
   }

   getPosts(name:string) : Observable<Post[]>{

    return this.http.get<Post[]>('https://api.github.com/search/users?q='+name);
   }

   getDetails(user:string) : Observable<User[]>{

    return this.http.get<User[]>('https://api.github.com/users/'+user+'/repos');
   }

  
}
