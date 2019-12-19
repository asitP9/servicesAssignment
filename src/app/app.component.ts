import { Component, OnInit } from '@angular/core';
import {userService} from './userService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [userService]
})


export class AppComponent implements OnInit {
  
  constructor(private myUserService:userService){}
  activeUsers:string[];
  inactiveUsers:string[];
  // onSetToInactive(id: number) {
  //   // this.myAppService.id.emit(id);
  //   // this.myAppService.inactiveUsers.push(this.activeUsers[id]);
  //   // this.myAppService.activeUsers.splice(id,1);
  //   // this.inactiveUsers.push(this.activeUsers[id]);
  //   // this.activeUsers.splice(id, 1);
  // }
  ngOnInit(){
    this.activeUsers=this.myUserService.activeUsers;
    this.inactiveUsers=this.myUserService.inactiveUsers;
  }

  // onSetToActive(id: number) {
  //   // this.activeUsers.push(this.inactiveUsers[id]);
  //   // this.inactiveUsers.splice(id, 1);
  // }
}
