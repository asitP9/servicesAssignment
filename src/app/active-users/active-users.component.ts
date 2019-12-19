import { Component, EventEmitter, Input, Output } from '@angular/core';
import {userService} from '../userService.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private myUserService:userService){};
  onSetToInactive(id: number, status:string) {
    // console.log("is it "+status);
    this.myUserService.pushAndRemoveEssentialUsers(id, status);
    //this.myUserService.inactiveUsers.push(this.myUserService.activeUsers[id]);
    // this.myUserService.activeUsers.splice(id,1);
    // this.userSetToInactive.emit(id);
  }
}
