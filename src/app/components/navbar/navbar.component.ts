import { Component, OnInit } from '@angular/core';
import {UserDataService} from'../../services/user-data.service';
import {User} from '../user/users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [ UserDataService ],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  users: User[];
  constructor(private user : UserDataService ) { }

  ngOnInit() {
   
    this.getData();
  }

  getData(): void {

    console.log("clling the api");
    this.user.getHeroes()
      .subscribe(users => { this.users = users});
  }


}
