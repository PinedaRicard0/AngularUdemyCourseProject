import { Component, OnInit, Input} from '@angular/core';
import { Recipie } from '../../recipie.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input('recipieItemSingleRecipie') singleRecipie:Recipie;
  @Input('index') index:Number;

  constructor(private router:Router) { }

  ngOnInit() {
  }
}
