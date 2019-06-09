import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amountInput: ElementRef;
  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddClicked(nameInput:HTMLInputElement){
    const nInput: string = nameInput.value;
    const aInput: string = this.amountInput.nativeElement.value;
    if(nInput !== '' && aInput !== '' && Number(aInput) > 0)
    {
      this.shoppinglistService.addIngredient(
        new Ingredient(nameInput.value,Number(this.amountInput.nativeElement.value))
      );
    }
  }

}
