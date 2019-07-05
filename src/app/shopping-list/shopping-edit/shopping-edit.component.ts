import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm : NgForm;
  isEditing= false;
  ingredient: Ingredient;
  subs: Subscription


  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit() {
    this.subs = this.shoppinglistService.ingredientEditing
    .subscribe(
      (ingredient : Ingredient) => {
        this.isEditing = true;
        this.ingredient = ingredient;
        this.slForm.setValue({
            name: this.ingredient.name,
            amount: this.ingredient.amount
          })
      }
    )
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  onAddClicked(formulario : NgForm){
    const value = formulario.value;
    const nInput: string = value.name;
    const aInput: string = value.amount;
    if(nInput !== '' && aInput !== '' && Number(aInput) > 0)
    {
      this.shoppinglistService.addIngredient(
        new Ingredient(nInput,Number(aInput))
      );
    }
  }

}
