import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.module';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  recipie: Recipie;
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipie(recipie:Recipie){
    this.recipie = recipie;
  }

}
