import { Component, OnInit, Input } from '@angular/core';
import { kitten } from '../kitten';
import { KITTEN } from '../list-kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {

  // add one cat

  addCat: kitten = {
    Name: null,
    Race: null,
    Birthday: null,
    Picture: null,
  }

  addKitten(param_a:string, param_b:string, param_c:string, param_d:string): void {
         KITTEN.push({ Name: param_a, Race: param_b, Birthday: param_c, Picture: param_d });
      console.log(KITTEN);
     }

  constructor() { }

  ngOnInit() {
  }



}
