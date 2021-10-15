import { Component, Injectable, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../api.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
data: any[];
  constructor(private api: ApiService, private router: Router) { }
  is_loading: boolean = false;
  ngOnInit(): void {
    // this.data = this.api.getUser();
    this.is_loading = true;
    this.doTask().then(val =>{
      console.log(val);
    });
  }

  addUser(){
    return this.router.navigate(['sampleApp/add']);
  }

  deletes(event){
    this.data = this.api.deleteUser(event);
  }

  doTask(){
    return new Promise(resolve => {
      setTimeout(() => {
        this.data = this.api.getUser();
        console.log('delay 1000');
        this.is_loading = false;
        resolve('done');
      }, 3000);
    })
  }
}
