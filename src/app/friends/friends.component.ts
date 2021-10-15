import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
@Input() value: string;
@Input() location: string;
@Input() friends: any[] = [];
@Output() sendFriend = new EventEmitter<any>();
newValue: boolean;
firstName: string;
lastName: string;
activeList: any[];
inactiveList: any[];
activeDisplay: any[];
inactiveDisplay: any[];
  constructor() { }

  ngOnInit(): void {
    this.newValue = this.value === 'active' ? true : false;
    this.categorizedFriends();
    setTimeout(()=>{
      this.activeDisplay = this.activeList;
      this.inactiveDisplay = this.inactiveList;
    }, 1000)
  }

  inputFriend(name, event){
    this[`${name}Name`] = event.target.value;
  }

  addFriend(){
    this.friends.push({firstName: this.firstName, lastName: this.lastName, isActive: this.newValue});
    this.categorizedFriends();
    this.sendFriend.emit(this.friends);
  }

  searchFriend(event){

      this[`${this.value}List`] = this[`${this.value}List`].filter(item => {
        const fullName = `${item.firstName} ${item.lastName}`
        if(fullName.toLowerCase().includes(event.target.value.toLowerCase()
        )){
          return item;
        } 
      });
    if (event.target.value === ''){
      this[`${this.value}List`] = this[`${this.value}Display`];
      
    }

  }

  categorizedFriends(){
    this[`${this.value}List`] = this.friends.filter(item => item.isActive === this.newValue);
    // console.log(this.activeList);
    // console.log(this.inactiveList);
    
    
  }

}
