import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  styleArray : {x_id : boolean , x_pw  : boolean} =  {x_id : false , x_pw : false}
  
  warn :boolean = false;
  @Input() visible1 : boolean = false;
  @Output() sendMyEvent : EventEmitter<any> = new EventEmitter(); // 보내는 역할
  
  id = new FormControl('');
  pwd = new FormControl('')
  
  private msg = '';
  
  constructor() { 
    
  }

  ngOnInit(): void {
  
  }

  set setMsg(arg:string){
    this.msg = arg
  }

  get getMsg() :string{
    return this.msg
  }

  
  
  tryToLogin(): void{
    console.log(this.id , this.pwd);
    
    if(this.id == 'admin' && this.pwd == '1234'){
      this.visible1 = true;
      this.sendMyEvent.emit(this.visible1);
    }
    else if (this.id != 'admin' && this.pwd != '1234'){
      this.setMsg = "아닌데 ? "
      this.styleArray.x_id = true;
    }
    
    if(this.pwd && this.pwd.length <= 4){
      this.warn = true;
    }
    
    console.log(this.id, this.pwd, this.visible1);
    
    
  }
  

}

