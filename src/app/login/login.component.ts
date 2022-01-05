import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';  //추가합니다!!!!!

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() visible1 : boolean = false; //받는 역할
  @Output() sendMyEvent : EventEmitter<any> = new EventEmitter(); 
  id = new FormControl('');  //폼 컨트롤러 클래스로 바꿉니다.
  pwd = new FormControl(''); //폼 컨트롤러 클래스로 바꿉니다.

  private message : string = '';

  styleArray = {'wrong_id':false, 'wrong_pw':false};

  constructor() { 

  }

  ngOnInit(): void {

  }

  tryToLogin() : void{
    if(this.id.value =='admin' && this.pwd.value == '1234'){
      alert('로그인합니다!');
      this.visible1 = true;
      this.sendMyEvent.emit(this.visible1);  //app컴포넌트에 전달
    } else if(this.id.value != 'admin'){
      this.setMessage = 'wrong id';
      this.styleArray.wrong_id = true;
      this.styleArray.wrong_pw = false;
    } else if(this.pwd.value != '1234'){
      this.setMessage = 'wrong pw';
      this.styleArray.wrong_id = false;
      this.styleArray.wrong_pw = true;
    } 
  }

  set setMessage(arg :any){  //대입합니다.
    this.message = arg;
  } 

  get getMessage() : any{  //가져옵니다.
    return this.message;
  }

  get styArray() :any{
    return this.styleArray;
  }

}