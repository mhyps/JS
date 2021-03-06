import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Rosol',
      'Domowy rosol',
      'https://upload.wikimedia.org/wikipedia/commons/4/4a/Rosol._Barlinek.jpg',
      [
        new Ingredient('kurczak', '2kg'),
        new Ingredient('wolowina', '300g'),
        new Ingredient('woda', '3l'),
      ]
    ),
    new Recipe(
      'Nalesniki',
      'Pyszne nalesniki',
      'https://cdn.pixabay.com/photo/2017/01/30/13/56/pancakes-2020870_960_720.jpg',
      [
        new Ingredient('mąka pszenna', '1 szklanka'),
        new Ingredient('jajka', '2 szt.'),
        new Ingredient('mleko', '1 szklanka'),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToSL(ingredients: Ingredient[]): void {
    this.slService.addIngredientList(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
