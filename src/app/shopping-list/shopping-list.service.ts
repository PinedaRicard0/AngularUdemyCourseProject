import { Ingredient } from '../shared/ingredient.module';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple',10),
        new Ingredient('Carrot',3)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addMultipleIngredients(ingredients:Ingredient[])
    {
        debugger;
        if(ingredients.length > 0)
        {
            for(let ingredient of ingredients)
            {
                this.ingredients.push(ingredient);
            }
            this.ingredientChanged.emit(this.ingredients.slice());
        }
    }
}