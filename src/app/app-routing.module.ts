import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";

import { HomeComponent } from './home-module/home/home.component';
import { LoginComponent } from './home-module/login/login.component';
import { SignupComponent } from './home-module/signup/signup.component';
import {UserComponent} from './home-module/user/user.component';
import{ShowmatchComponent} from './home-module/showmatch/showmatch.component';

const appRoutes:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path: 'details/:id', component:UserComponent },
    {path: 'getusers',component:ShowmatchComponent},
    {path:'signup',component:SignupComponent},
    {path:'**',redirectTo:'/home',pathMatch:'full'}
    
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
      RouterModule
  ]
})
export class AppRoutingModule { }
