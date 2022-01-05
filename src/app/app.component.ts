import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginBool = true;
  boardBool = true;

  getEventThanks(e:any){
    console.log(e + " clear")
    if(e ==true){
      this.loginBool =false;
      this.boardBool = true;
    }
  }
}
