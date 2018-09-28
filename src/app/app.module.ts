import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModuleModule } from "./home-module/home-module.module";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,HomeModuleModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
