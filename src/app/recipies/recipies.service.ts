import { Recipie } from './recipie.module';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

export class RecipeService{

    private recipies: Recipie[] = [
        new Recipie('Recipie','this is a test recipie','https://media.mykaramelli.com/galeria/recetas/receta-tarta-selva-negra_129_1.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French fries', 20)
        ]),
        new Recipie('Recipie','this is another super test recipie','https://media.mykaramelli.com/galeria/recetas/receta-tarta-selva-negra_129_1.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ];
    
      recipeSelected = new EventEmitter<Recipie>();

      getRecipes(){
          return this.recipies.slice();
      }
}