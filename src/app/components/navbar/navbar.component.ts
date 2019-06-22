import { Component, OnInit } from '@angular/core';
import {UserDataService} from'../../services/user-data.service';
import {User} from '../../models/users';
import{Post} from '../../models/Post';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [ UserDataService ],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  users: User;
  posts:Post[];
  config: any;
  detailEnabled:boolean;
  p:number;
  totalMemberCount:number;
  postId:number=null;
  loginUser:string=null;
  constructor(private user : UserDataService ) {}

  ngOnInit() {
   
    this.p = 1;
    this.detailEnabled = false;
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

detailsFunction(user:string,postId:number) {
this.postId=postId;
this.loginUser = user;
  console.log(user);
  this.user.getDetails(user).subscribe(posts=>{
    this.users=posts[0];
    console.log("returned second api result below");
    console.log(posts[0]);
    console.log(posts[0]);
    console.log(this.users);
   // posts=Object.keys(posts).map(x=>posts[x]);

    //console.log(this.posts);
  })
  this.showDetails();


}

showDetails(){

this.detailEnabled = !this.detailEnabled;
}

pageChanged(event){
  this.config.currentPage = event;
}


// sortBy(field: string) {

//   this.posts.sort((a: any, b: any) => {
//       if (a[field] < b[field]) {
//           return -1;
//       } else if (a[field] > b[field]) {
//           return 1;
//       } else {
//           return 0;
//       }
//   });
//   this.posts = this.posts;
// }

}
