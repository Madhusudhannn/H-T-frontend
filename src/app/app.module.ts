import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SavequestionsComponent } from './savequestions/savequestions.component';
import { QuestionsComponent } from './questions/questions.component';
import { SaveAnswersComponent } from './save-answers/save-answers.component';
import { RquestionComponent } from './rquestion/rquestion.component';
import { GetallquestionsComponent } from './getallquestions/getallquestions.component';
import { LogoutComponent } from './logout/logout.component';
import { LogInrouteComponent } from './log-inroute/log-inroute.component';



const routes:Route []=[
  { path:'registration', component:RegistrationComponent},
  { path:'login', component:LoginComponent},
  { path:'savequestions', component:SavequestionsComponent},
  { path:'questions', component:QuestionsComponent},
  { path:'saveanswers', component:SaveAnswersComponent},
  { path:'getallquestions', component:GetallquestionsComponent},
  { path:'logout', component:LogoutComponent},
  { path:'homepage', component:HomepageComponent}


  
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegistrationComponent,
    LoginComponent,
    SavequestionsComponent,
    QuestionsComponent,
    SaveAnswersComponent,
    RquestionComponent,
    GetallquestionsComponent,
    LogoutComponent,
    LogInrouteComponent,
 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



