import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HumanaserviceService } from '../humanaservice.service';


@Component({
  selector: 'app-savequestions',
  templateUrl: './savequestions.component.html',
  styleUrls: ['./savequestions.component.css']
})
export class SavequestionsComponent implements OnInit {
  save=new FormGroup({
    question:new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required]),
    userId:new FormControl("",[Validators.required]),
    dob:new FormControl("",[Validators.required])
  });
  savequestions(){
    console.log('Question saved');
    const observable= this.HumanaserviceService.savequestions(this.save.getRawValue());
    observable.subscribe(
      (Response: any) => {
        console.log(Response);
        alert("Question saved successfully")
       
      },
      function () {

        alert("User Id not found")

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
  get question(): FormControl{
    return this.save.get("question") as FormControl;
  }
  get description(): FormControl{
    return this.save.get("description") as FormControl;
  }
  get userId(): FormControl{
    return this.save.get("userId") as FormControl;
  }
  get dob(): FormControl{
    return this.save.get("dob") as FormControl;
  }

}
