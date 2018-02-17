import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from'@angular/router'

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

// sub:any;
// id:any;

id:any;
fname:any;
lname:any;
age:number;
email:any;
password:any;
                                                                

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params)
      /*this.id = params.id;
      this.fname = params.fname;
      this.lname = params.lname;
      this.age   = params.age;
      this.email = params.email;
      this.password = params.password;   */
    });
    // this.sub = this.route.params
    // .subscribe(params => {
    //   this.id = +params['id'] ; 
     
    // })

  }
  //  let viewid =this.route.params.subscribe(res => {
  //    this.allview= this.allview+res;
  //     // console.log(res.id);
  //    });
  // }

}
