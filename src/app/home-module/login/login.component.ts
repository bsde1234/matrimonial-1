import { Component, OnInit } from '@angular/core';
import { EmailValidator } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  onSubmit(){this.submitted=true;}
  constructor() { }

  ngOnInit() {
  }

}
