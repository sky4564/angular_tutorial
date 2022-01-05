import { Component, OnInit } from '@angular/core';

declare type MyType = {
  text : any;
  number : any;
};



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  a :boolean = true;
  DataArray : Array<MyType> = [ ];  //데이터를 담는 변수

  constructor() { 

  }

  ngOnInit(): void {
    for(var i = 0;i < 10;i++){
      this.DataArray.push({text:'abcd'+i, number:i+1});
    }
  }

  showData(arg? : Text){  //화면에서 데이터를 볼 함수
    if(arg){
      console.log(arg);
    } else {
      console.log(this.DataArray);
    }
  }

}