import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.module';
import { RecipeService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {

  recipie: Recipie;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipie:Recipie) => {
        this.recipie = recipie;
      }
    )
  }
}
