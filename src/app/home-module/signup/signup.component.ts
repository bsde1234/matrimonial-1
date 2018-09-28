import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted=false;
  // public user_details=data;
  onSubmit(){this.submitted=true;
  
  }
  profile=['self','son','daughter','Brother','Sister'];
  constructor() { }

  ngOnInit() {
  }

}
