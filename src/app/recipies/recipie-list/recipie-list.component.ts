import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../recipie.module';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipies: Recipie[] = [
    new Recipie('Recipie','this is a test recipie','https://media.mykaramelli.com/galeria/recetas/receta-tarta-selva-negra_129_1.jpg'),
    new Recipie('Recipie','this is another super test recipie','https://media.mykaramelli.com/galeria/recetas/receta-tarta-selva-negra_129_1.jpg')
  ];

  @Output('rlRecipie') selectedRecipie = new EventEmitter<Recipie>();

  constructor() { }

  ngOnInit() {
  }

  onRecipieSelected(recipie :Recipie){
    this.selectedRecipie.emit(recipie);
  }

}
