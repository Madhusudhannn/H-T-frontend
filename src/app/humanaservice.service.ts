import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { questionscontent } from './questionscontent.service';

@Injectable({
  providedIn: 'root'
})
export class HumanaserviceService {
 
  BASE_URL = "http://localhost:8010/api/auth";
  

  login(user :any){

    return this.http.post(this.BASE_URL+'/login',user);

  }
  userregister(registred:any ){
    console.log(registred.firstName+"service")
    return this.http.post(this.BASE_URL+'/userregister', registred);
  }
  savequestions(question1: any) {
    return this.http.post(this.BASE_URL+'/savequestions', question1);
  }
  getquestionsbyId(questionId: any){
    return this.http.get(this.BASE_URL+'/questions/id/'+questionId)
  }
  getquestions(){
    return this.http.get(this.BASE_URL+'/questions')
  }

  constructor(private http: HttpClient) { }
}
