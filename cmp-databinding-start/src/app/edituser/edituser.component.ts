import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service'


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
  providers:[UsersService]
})
export class EdituserComponent implements OnInit {
  id:any;
  fname:any;
  lname:any;
  age:number;
  email:any;
  password:any;
  constructor( private route:ActivatedRoute, private user:UsersService) { }
  listuser:any;
  UserInfo:any;

  ngOnInit() {
    this.route.params.subscribe((par) => {
      console.log(par);
      console.log('###################');
      console.log(par['id']);
      this.id = par['id'];
      /*this.fname = params.fname;
      this.lname = params.lname;
      this.age   = params.age;
      this.email = params.email;
      this.password = params.password;   */

      //call the viewuser api
      // onsuccess 

      this.user.viewUser(par['id'])
    .subscribe(res=>{
      var usr = res.data;
       this.fname = usr.fname;
      this.lname = usr.lname;
      this.age   = usr.age;
      this.email = usr.email;
      this.password = usr.password;
      
    });
    });
  }
  

}
