import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication-signup',
  templateUrl: './authentication-signup.component.html',
  styleUrls: ['./authentication-signup.component.scss']
})
export class AuthenticationSignupComponent implements OnInit {

  currentRoute: any;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute)
  }

}
