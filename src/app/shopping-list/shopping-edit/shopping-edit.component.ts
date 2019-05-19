import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amountInput: ElementRef;
  @Output('seIngredientAdded') ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddClicked(nameInput:HTMLInputElement){
    const nInput: string = nameInput.value;
    const aInput: string = this.amountInput.nativeElement.value;
    if(nInput !== '' && aInput !== '' && Number(aInput) > 0)
    {
      this.ingredientAdded.emit(
        new Ingredient(nameInput.value,Number(this.amountInput.nativeElement.value))
        )
    }
  }

}
