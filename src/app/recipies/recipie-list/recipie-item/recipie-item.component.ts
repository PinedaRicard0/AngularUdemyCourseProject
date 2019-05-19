import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../../recipie.module';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input('recipieItemSingleRecipie') singleRecipie:Recipie;
  @Output('recipeItemSelectedRecipie') selectedRecipe = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(){
    this.selectedRecipe.emit();
  }
  
}
