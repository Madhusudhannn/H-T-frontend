import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HumanaserviceService } from '../humanaservice.service';

@Component({
  selector: 'app-getallquestions',
  templateUrl: './getallquestions.component.html',
  styleUrls: ['./getallquestions.component.css']
})
export class GetallquestionsComponent implements OnInit {
  rquestion={
    questionId:"",
    question:"",
    description:"",
    dob:""
  }
  rquestions: any[]=[];
  getallquestions(){
    const observable=this.HumanaserviceService.getquestions();
    observable.subscribe((rquestionsfromserver: any) => {
      this.rquestions=rquestionsfromserver;
    })
  }
    
    constructor(private HumanaserviceService: HumanaserviceService, private Router: Router) { }

  ngOnInit(): void {
    let data= localStorage.getItem('value');
    if(!data){
     this.Router.navigate(['login']);
    }
    
  }

}
