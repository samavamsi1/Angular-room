import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  id:any;
  fname:any;
  lname:any;
  age:number;
  email:any;
  password:any;
  constructor( private route:ActivatedRoute) { }
  listuser:any;
  UserInfo:any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.fname = params.fname;
      this.lname = params.lname;
      this.age   = params.age;
      this.email = params.email;
      this.password = params.password;   
    });
  }
  

}
