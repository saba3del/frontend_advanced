import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // uid:string  = "";
  //   pwd:string  = "";
  //   result:string  = "";
  //   isButtonDisable = false;
  //   count:number = 0;

  //   isValidUser():void
  //   {     
  //     if(this.uid == "admin"  && this.pwd == "admin123")
  //     {
  //       this.result  = "Welcome to Admin";
  //     }
  //     else
  //     {
  //       this.count++;
  //       this.result  = "Invalid user id or password";
  //       alert(this.count);
  //       if(this.count == 3)
  //       {
  //         this.isButtonDisable = true;
  //       }

  //     }
  //   }

  //   getColor():string{
  //     if(this.uid == "admin"  && this.pwd == "admin123")
  //     {
  //       return "green";
  //     }
  //     else{
  //       return "red";
  //     }
  //   }

  uid:string  = "admin";
  pwd:string  = "admin123";
  result:string  = "";


  constructor(private router:Router, private activatedRouteObj:ActivatedRoute) { }

  isValidUser():void
  {     

    var str:string  = this.activatedRouteObj.snapshot.queryParams["returnUrl"];
   
    if(str == null) 
    {  
      str  = "/"; 
    }

    if(this.uid == "admin"  && this.pwd == "admin123")
    {
      //  a. Create the token
      sessionStorage.setItem("AUTH_TOKEN", this.uid);

      // b.  Redirect to requested page or default page
      this.router.navigate([str]);
    }
    else
    {
      this.result  = "Invalid user id or password";
    }
  }

}
