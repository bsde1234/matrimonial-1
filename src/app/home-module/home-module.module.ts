import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from "ngx-bootstrap/carousel";
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from "../app-routing.module";
import { ShowmatchComponent } from './showmatch/showmatch.component';
@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,LoginComponent,SignupComponent
  ],
  declarations: [HomeComponent, LoginComponent, SignupComponent, UserComponent, ShowmatchComponent]
})
export class HomeModuleModule { }
