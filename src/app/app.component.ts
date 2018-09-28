import { Component,OnInit } from '@angular/core';
import * as $  from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Matrimony';
  navbarOpen=false;
  

  ngOnInit(){
  //   $("button").click(function(){
  //     $("#demo").hide(500).show(500);
  // });
  }
  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }
 
  
}
