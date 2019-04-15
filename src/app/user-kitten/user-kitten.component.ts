import { Component, OnInit } from '@angular/core';
import { userKittenAdded } from '../list-kitten';
import { kitten } from '../kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {

  public userListKitten: kitten[] = userKittenAdded;

  constructor() { }

  ngOnInit() {
  }

}
