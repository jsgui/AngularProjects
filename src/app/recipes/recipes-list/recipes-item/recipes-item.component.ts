import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent {
@Input() recipe: Recipe;
 @Output() recipeSelected = new EventEmitter<void>();
onSelected(){
  this.recipeSelected.emit();
  
  }
}
