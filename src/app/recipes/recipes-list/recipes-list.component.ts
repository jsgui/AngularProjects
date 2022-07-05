import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {

  recipes: Recipe [] = [  
    new Recipe('A test Recipe', 'This is simply a test' , 'https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Sausage-and-mushroom-ragu-203c7d4.jpg')
];

  constructor() { }


}
