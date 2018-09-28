import { Component, OnInit } from '@angular/core';
  @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  myInterval = 1500;
  activeSlideIndex = 0;

  slides = [
    {image: './assets/images/3.jpeg'},
    {image: './assets/images/2.jpeg'},
    {image: './assets/images/1.jpeg'}
  ];
  constructor() { }

  ngOnInit() {
  }

 

}
