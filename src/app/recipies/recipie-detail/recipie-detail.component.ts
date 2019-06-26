import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.module';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipies.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {

  @Input('rdRecipie') recipie:Recipie;
  id : number;

  constructor(private recipeService:RecipeService,private shoppinglistService: ShoppingListService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(
      (params:Params) => {
        this.recipie = this.recipeService.getRecipeByIndex(Number(params['id']));
        this.id = Number(params['id']);
      }
    );
  }

  onAddIngredientsToSL(){
    this.shoppinglistService.addMultipleIngredients(this.recipie.ingredients);
  }

}
