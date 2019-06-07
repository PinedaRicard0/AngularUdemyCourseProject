import { Recipie } from './recipie.module';

export class RecipeService{

    private recipies: Recipie[] = [
        new Recipie('Recipie','this is a test recipie','https://media.mykaramelli.com/galeria/recetas/receta-tarta-selva-negra_129_1.jpg'),
        new Recipie('Recipie','this is another super test recipie','https://media.mykaramelli.com/galeria/recetas/receta-tarta-selva-negra_129_1.jpg')
      ];

      getRecipes(){
          return this.recipies.slice();
      }
}