import { Recipe } from "./recipe.model";
import { ingredient } from "../shared/ingredient.model";
import { Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    
    private recipes:Recipe[] = [
        new Recipe(
            'The Dirty Burg', 
            'A burger you will never forget', 
            'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg',
            [
                new ingredient('Ground Beef', 1),
                new ingredient('Bread Crumbs', 1),
                new ingredient('Soy Sauce', 1),
                new ingredient('Lettuce', 1),
                new ingredient('Tomato', 1),
                new ingredient('Onion', 1),
                new ingredient('Rolls', 1)

            ]),
        new Recipe(
            'Winter Chili', 
            'Savory and Spicy, Perfect winter soup', 
            'https://static01.nyt.com/images/2021/01/05/dining/ah-ground-beef-chili/merlin_181550151_bb82fcea-8242-4fa6-a712-7c984eb33155-articleLarge.jpg',
            [
                new ingredient('Ground Beef', 1),
                new ingredient('V8', 1),
                new ingredient('Salsa', 1),
                new ingredient('Cheese', 1),
                new ingredient('Beans', 1),
                new ingredient('Onion', 1),
            ]),
        new Recipe(
            'The Steak of Ages', 
            'Top Tier', 
            'https://www.foodrepublic.com/wp-content/uploads/2012/05/testkitchen_argentinesteak-1280x560.jpg',
            [
                new ingredient('Ground Beef', 1),
                new ingredient('Rosemary', 1),
                new ingredient('Salt', 1),
                new ingredient('Pepper', 1),
            ]),
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(id: number) {
          return this.recipes[id];
      }

      addIngredientsToShoppingList(ingredients: ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}