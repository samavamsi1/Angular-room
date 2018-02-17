import { Component, OnInit,Input } from '@angular/core';
import {UsersService} from '../users.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UsersService]
})
export class HomeComponent implements OnInit {
  // userinfo:any;
  listuser:any;
  UserInfo:any;

  // @Input() fname:string;
  constructor(private user:UsersService) { }

  ngOnInit() {
    this.user.listuser()
    .subscribe(res=>{
   // console.log('####');
    //console.log(res.data);
      this.listuser = res.data;  
    })
  }
  viewUser(id){
    this.user.viewUser(id)
    .subscribe(res=>{
      this.UserInfo =res.data;
      
    })
  }


  Edituser(id){

    this.user.edituser(id)
      .subscribe(res => {
        this.UserInfo = res.data;
        // console.log(res.data)
          this.user.listuser()
          .subscribe(res=>{
            this.listuser= res.data;
          })
    })
  }
  Deleteuser(id){
    this.user.deleteuser(id)
      .subscribe(res=>{
        this.UserInfo = res.data;

        this.user.listuser()
          .subscribe(res=>{
            this.listuser= res.data;
          })
      })
  }
  
  // CreateUser(){
  //   this.user.createuser()
  //     .subscribe(res=>{
  //       this.UserInfo = res.data;

  //       this.user.listuser()
  //         .subscribe(res=>{
  //           this.listuser = res.data;
  //         })
  //   })
  // }
}

