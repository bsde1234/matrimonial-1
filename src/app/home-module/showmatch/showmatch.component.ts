import { Component, OnInit } from '@angular/core';
import {userinfo} from '../data/userinfo';
@Component({
  selector: 'app-showmatch',
  templateUrl: './showmatch.component.html',
  styleUrls: ['./showmatch.component.css']
})
export class ShowmatchComponent implements OnInit {
  public users=userinfo;
  constructor() { }

  ngOnInit() {
  }

}
