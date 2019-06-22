import { Recipie } from './recipie.module';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

export class RecipeService{

    private recipies: Recipie[] = [
        new Recipie('Cake','For a celebration','https://media.mykaramelli.com/galeria/recetas/receta-tarta-selva-negra_129_1.jpg',
        [
            new Ingredient('Cream', 1),
            new Ingredient('Flour', 20)
        ]),
        new Recipie('Hot dog','For a quick dinner','https://rapidbrandsinc.com/wp-content/uploads/2017/05/Screenshot.png',
        [
            new Ingredient('Bread', 2),
            new Ingredient('Sauce', 1)
        ])
      ];
    
      recipeSelected = new EventEmitter<Recipie>();

      getRecipes(){
          return this.recipies.slice();
      }

      getRecipeByIndex(index:number): Recipie
      {
          return this.recipies.slice()[index];
      }
}