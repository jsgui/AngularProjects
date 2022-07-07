import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe [] = [  
    new Recipe('A test Recipe', 'This is simply a test' , 'https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Sausage-and-mushroom-ragu-203c7d4.jpg'),
    new Recipe('A sweet Recipe', 'This is a a test' , 'https://cozinhalegal.com.br/files/receitas/819/Receita-Waffle-Americano-Fofinho-4.jpg'),

];

@Output() recipeWasSelected = new EventEmitter<Recipe>();
onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
}

  constructor() { }

  ngOnInit(): void {
  }

}
