import { Component, OnInit, Input} from '@angular/core';
import { Recipie } from '../../recipie.module';
import { RecipeService } from '../../recipies.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input('recipieItemSingleRecipie') singleRecipie:Recipie;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onRecipeSelect(){
    this.recipeService.recipeSelected.emit(this.singleRecipie);
  }
  
}
