import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: ingredient[];
  private igChangeSub: Subscription;

  constructor(private sLService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sLService.getIngredients();
       this.igChangeSub = this.sLService.ingredientChanged
      .subscribe(
        (ingredients: ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }
 

}
