import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-inroute',
  templateUrl: './log-inroute.component.html',
  styleUrls: ['./log-inroute.component.css']
})
export class LogInrouteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let data= localStorage.getItem('value');
   if(!data){
    this.router.navigate(['login']);
   }
  }

}
