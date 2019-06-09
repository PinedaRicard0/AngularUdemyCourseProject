import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.module';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {

  @Input('rdRecipie') recipie:Recipie;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredientsToSL(){
    this.shoppinglistService.addMultipleIngredients(this.recipie.ingredients);
  }

}
