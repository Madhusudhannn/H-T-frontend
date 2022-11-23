import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HumanaserviceService } from '../humanaservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registred= new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    emailID:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required]),
    dob:new FormControl("",[Validators.required]),
    role:new FormControl("",Validators.required)

  });
 
  userregister()
  {
    
    console.log('user saved');
    const observable= this.HumanaserviceService.userregister(this.registred.getRawValue());
    observable.subscribe(
      (Response: any) => {
        alert(Response.message);
        
        this.Router.navigate(['login']);
       
      },
       (error:any) =>{

        alert(error.error.errormessage);

      }

    )
   
     
  }
  constructor(private HumanaserviceService: HumanaserviceService, private Router: Router) { }

  ngOnInit(): void {
    
  }
  get firstName(): FormControl{
    return this.registred.get("firstName") as FormControl;
  }
  get lastName(): FormControl{
    return this.registred.get("lastName") as FormControl;
  }
  get emailID(): FormControl{
    return this.registred.get("emailID") as FormControl;
  }
  get password(): FormControl{
    return this.registred.get("password") as FormControl;
  }
  get dob(): FormControl{
    return this.registred.get("dob") as FormControl;
  }
  get role(): FormControl{
    return this.registred.get("role") as FormControl;
  }
 

}

