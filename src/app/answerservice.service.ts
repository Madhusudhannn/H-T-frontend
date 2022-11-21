import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerserviceService {
  BASE_URL = "http://localhost:8020";
  saveAnswers(answers: {answer: string;questionId:string;userId:string;dob:string}) {
    return this.http.post(this.BASE_URL+'/saveanswer', answers);

  }
  constructor(private http: HttpClient) { }
}
