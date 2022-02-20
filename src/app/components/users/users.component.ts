import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() { 
    this.users = [];
   }

  ngOnInit(): void {

      this.users = [
        {
        firstName:'John',
        lastName: 'Doe',
        age: 31,
        adress: {
            street: '50 mint st',
            city: 'Boston',
            state: 'NY'
        }
    },
        {
          firstName:'Pope',
          lastName: 'Jean'
      },
        {
          firstName:'Mariah',
          lastName: 'Carey',
          age: 31,
          adress: {
              street: '50 mint st',
              city: 'Boston',
              state: 'NY'
          }
        }      
      ];


    this.loaded = true;

    this.addUser({
      firstName:'Jonas',
        lastName: 'Carey',

    });

    

    }
    
    addUser(user: User): void {
      this.users.push(user);
    }

  
        
    
   

  }