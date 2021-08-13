
import { EventEmitter } from "@angular/core";
import { ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientChanged = new Subject<ingredient[]>();
    private ingredients: ingredient[]=[
        new ingredient('Apples', 5),
        new ingredient('Tomatoes', 10),
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: ingredient){
          this.ingredients.push(ingredient);
          this.ingredientChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
      }
}