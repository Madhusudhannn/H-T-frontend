import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerserviceService } from '../answerservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-save-answers',
  templateUrl: './save-answers.component.html',
  styleUrls: ['./save-answers.component.css']
})
export class SaveAnswersComponent implements OnInit {

  anssave=new FormGroup({
    answer:new FormControl(""),
    questionId:new FormControl(""),
    userId:new FormControl(""),
    dob:new FormControl("")
  });
   saveanswers(){
    console.log('Answer saved');
    const observable= this.AnswerserviceService.saveAnswers(this.anssave.getRawValue());
    observable.subscribe(
      (Response: any) => {
        console.log(Response);
        alert("Answer saved successfully")
       
      },
      function () {

        alert("UserID or questionId not found")

      }

    )
  }

  constructor(private AnswerserviceService: AnswerserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  get answer(): FormControl{
    return this.anssave.get("answer") as FormControl;
  }
  get questionId(): FormControl{
    return this.anssave.get("questionId") as FormControl;
  }
  get userId(): FormControl{
    return this.anssave.get("userId") as FormControl;
  }
  get dob(): FormControl{
    return this.anssave.get("dob") as FormControl;
  }
}
