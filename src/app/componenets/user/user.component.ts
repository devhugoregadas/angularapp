import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    //Properties
    firstName: string;
    lastName: string;
    age: number;
    adress;
    food:any;
    hasKids: boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, boolean];

    //Methods
    constructor(){
        this.firstName = 'John';
        this.lastName = 'Doe'
        this.age = 31;

        this.adress = {
            street: '50 mint st',
            city: 'Boston',
            state: 'NY'
        },

        this.hasKids = false;
        this.food = true;
        this.numberArray = [1,2,3];
        this.stringArray = ['Hello','World']
        this.mixedArray = [true, undefined, 'hello']
        this.myTuple = ['Hello',1, true]
    }        
    



}