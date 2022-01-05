import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { ReactiveFormsModule } from '@angular/forms';  //반응형 폼?

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule  //imports를 통해서 다른 컴포넌트들이 해당 모듈의 기능을 사용할 수 있게 해 줍니다.  
    ,ReactiveFormsModule  //반응형 폼 사용
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }