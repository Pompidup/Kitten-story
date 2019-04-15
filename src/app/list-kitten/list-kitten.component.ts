import { Component, OnInit } from '@angular/core';
import { KITTEN } from '../list-kitten';
import { kitten } from '../kitten';
import { userKittenAdded } from '../list-kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  public kittenList:kitten[] = KITTEN;
  // public userList = userKittenAdded;

  addKittenUser(param_a: string, param_b:string, param_c:string, param_d: string, param_e): void{

    // add kitten from list on user kitten list
    let tmp = new kitten(param_a,param_b,param_c,param_d);
    userKittenAdded.push(tmp);

    // remove added cat
    this.kittenList.splice(this.kittenList.indexOf(param_e),1);

  }





  constructor() {
  }

  ngOnInit() {

  }



}
