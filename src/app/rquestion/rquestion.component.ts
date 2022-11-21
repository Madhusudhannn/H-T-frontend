import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rquestion',
  templateUrl: './rquestion.component.html',
  styleUrls: ['./rquestion.component.css']
})
export class RquestionComponent implements OnInit {

  rquestion={
    questionId:"",
    question:"",
    description:"",
    userId:"",
    dob:""
  }
  rquestions : any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
