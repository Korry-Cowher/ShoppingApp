import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes:Recipe[] = [
    new Recipe('A Test Recipe1', 'This is a test1', 'https://c.pxhere.com/photos/26/d0/zucchini_wraps_zucchini_slices_food_fish_fillet_recipe_fish_recipes_food_photography_plated_food_delicious_food-1376204.jpg!d'),
    new Recipe('A Test Recipe2', 'This is a test2', 'https://c.pxhere.com/photos/26/d0/zucchini_wraps_zucchini_slices_food_fish_fillet_recipe_fish_recipes_food_photography_plated_food_delicious_food-1376204.jpg!d'),
    new Recipe('A Test Recipe3', 'This is a test3', 'https://c.pxhere.com/photos/26/d0/zucchini_wraps_zucchini_slices_food_fish_fillet_recipe_fish_recipes_food_photography_plated_food_delicious_food-1376204.jpg!d')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
