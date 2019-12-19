import { OnInit } from "@angular/core";

export class counterService implements OnInit{
    ngOnInit(){
    }

    increaseCountOfClicks(noOfClicks:number){
        console.log("The no of the transactions are "+noOfClicks);

    }
}