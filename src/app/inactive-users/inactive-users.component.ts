import { Component, EventEmitter, Input, Output } from '@angular/core';
import {userService} from '../userService.service'

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private myUserService:userService){};

  onSetToActive(id: number) {
    // this.myUserService.activeUsers.push(this.myUserService.inactiveUsers[id]);
    // this.myUserService.inactiveUsers.splice(id,1);
    this.myUserService.pushAndRemoveEssentialUsers(id, status);

    // this.userSetToActive.emit(id);
  }
}
