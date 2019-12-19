import { EventEmitter, Injectable } from "@angular/core";
import { counterService } from "./counterService.service";

@Injectable()
export class userService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    noOfClicks:number=0;
    constructor(private myCounterService:counterService){
        
        myCounterService.increaseCountOfClicks(this.noOfClicks);
    };
    pushAndRemoveEssentialUsers(id:number, status:string){
        if(status==="active"){
            this.inactiveUsers.push(this.activeUsers[id]);
            this.activeUsers.splice(id,1);
        }
        else{
            this.activeUsers.push(this.inactiveUsers[id]);
            this.inactiveUsers.splice(id,1);
        }
        this.noOfClicks=this.noOfClicks+1;
        this.myCounterService.increaseCountOfClicks(this.noOfClicks);
    }


}
