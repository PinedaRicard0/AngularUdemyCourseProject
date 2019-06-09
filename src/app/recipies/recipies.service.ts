import { Recipie } from './recipie.module';
import { EventEmitter } from '@angular/core';

export class RecipeService{

    private recipies: Recipie[] = [
        new Recipie('Recipie','this is a test recipie','https://media.mykaramelli.com/galeria/recetas/receta-tarta-selva-negra_129_1.jpg'),
        new Recipie('Recipie','this is another super test recipie','https://media.mykaramelli.com/galeria/recetas/receta-tarta-selva-negra_129_1.jpg')
      ];
    
      recipeSelected = new EventEmitter<Recipie>();

      getRecipes(){
          return this.recipies.slice();
      }
}