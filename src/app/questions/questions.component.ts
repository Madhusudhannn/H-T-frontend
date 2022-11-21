import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HumanaserviceService } from '../humanaservice.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
question={
  question:"",
  description:"",
  dob:""
}
  questions={
   questionId:""

  }
 
  
  
  constructor(private HumanaserviceService: HumanaserviceService, private Router: Router) { }

  ngOnInit(): void {
    
  }

  getquestionbyId()
  {
    if(this.questions.questionId=="")
    {
      alert("Please enter questionId")
    }
    else{
      const observable=this.HumanaserviceService.getquestionsbyId(this.questions.questionId);
    observable.subscribe((rquestionsfromserver: any) => {
      this.question=rquestionsfromserver;
    })
    }
  }
}









