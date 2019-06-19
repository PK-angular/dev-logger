import { Component, OnInit } from '@angular/core';
import {UserDataService} from'../../services/user-data.service';
import {User} from '../user/users';
import{Post} from '../../models/Post';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [ UserDataService ],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  users: User[];
  posts:Post[];
  constructor(private user : UserDataService ) { }

  ngOnInit() {
   
    //this.getData();
  }

  // getData(): void {

  //   console.log("clling the api");
  //   this.user.getHeroes()
  //     .subscribe(users => { this.users = users});
  // }

  onSubmit(f: NgForm){
this.getData(f.value.first);
console.log(f.value.first);  
}

getData(name:string){
  this.user.getPosts(name).subscribe(posts=>{
    this.posts=posts;
    console.log(posts);
    posts=Object.keys(posts).map(x=>posts[x]);
    console.log(this.posts);
  })

}



}
