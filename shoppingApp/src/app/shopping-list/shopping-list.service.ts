
import { EventEmitter } from "@angular/core";
import { ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged = new EventEmitter<ingredient[]>();
    private ingredients: ingredient[]=[
        new ingredient('Apples', 5),
        new ingredient('Tomatoes', 10),
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: ingredient){
          this.ingredients.push(ingredient);
          this.ingredientChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
}