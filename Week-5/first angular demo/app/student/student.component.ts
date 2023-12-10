import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
 

  sid:number=0;
  sname:string="";
  dob:Date=new Date();


  items:any=["apple","banana","grapes","kiwi","orange"];
  imageURL="../../assets/download.jpeg"


  

  ngOnInit(): void {
   this.sid=101;
   this.sname="vishal";
  }

  getData(){
    alert(this.sid+" "+this.sname);
  }






}
