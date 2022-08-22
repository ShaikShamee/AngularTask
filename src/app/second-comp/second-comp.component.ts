import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
onlineStatus:string="Online";  
offlineStatus:string="Offline";  
  constructor() { }
ngOnInit(): void {
 }
title = 'Structural Directives';
public isValid = true;
 public values:number=0;
 getOnlineStatusColor()
 {
  return "green"; 
 }
 getOfflineStatusColor()
 {  
  return "red";  
 }  
 SelectedIds(id:any)
 {
  this.values=id.target.value;
 }
 myNumEnum:string = "Hello world";	
 emp1 :Employee[]=[{Id:11,Name:'renuka',Job:'Dev'},
               {Id:12,Name:'sailaja',Job:'Tester'},
               {Id:13,Name:'vasmi',Job:'analaysit'},
               {Id:14,Name:'pandu',Job:'Dev'},
               {Id:15,Name:'guna',Job:'Tester'},
               {Id:16,Name:'radha',Job:'HR'}];
}
class Employee{
  Id:number=0;
  Name:string='';
  Job:string='';
}




