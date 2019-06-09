import { Component, OnInit} from '@angular/core';
import { Recipie } from '../recipie.module';
import { RecipeService } from '../recipies.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipies: Recipie[] = [];

  constructor(private recipeService:RecipeService){}

  ngOnInit() {
    this.recipies = this.recipeService.getRecipes();
  }
}
