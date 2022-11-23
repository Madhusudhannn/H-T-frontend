import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HumanaserviceService } from '../humanaservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new FormGroup({
    emailID:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required])
  });
  login(){
    const observable = this.HumanaserviceService.login(this.user.getRawValue());

    observable.subscribe(
      (Response: any) => {
        console.log(Response);
        alert("User successfully signed")
        localStorage.setItem('value',"1");
        this.router.navigate(['savequestions']);

      },
      function () {

        alert("Email or password Invalid")

      }

    )
  }
  constructor(private HumanaserviceService: HumanaserviceService, private router: Router) { }

  ngOnInit(): void {
    let data= localStorage.getItem('value');
   if(!data){
    this.router.navigate(['login']);
   }
  
  }

get emailID(): FormControl{
    return this.user.get("emailID") as FormControl;
  }
  get password(): FormControl{
    return this.user.get("password") as FormControl;
  }
}
