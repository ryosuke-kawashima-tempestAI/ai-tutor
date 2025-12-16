import { Component, computed, signal } from '@angular/core';
import { Ingredient, RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly recipes: RecipeModel[] = MOCK_RECIPES;
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal(0);

  protected showCarbonara(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }
  protected showCapreseSalad(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }
  protected increment(): void {
    this.servings.update(counter => counter + 1);
  }
  protected decrement(): void {
    this.servings.update(counter => counter - 1);
  }
  protected readonly AdjustedIngredients = computed(() => {
    const originalIngredients = this.recipe().ingredients;
    const curServings = this.servings();
    const newIngredients = originalIngredients.map(ingredient => {
      // returns a JSON object with the same keys as the original object  
      return {
        "name": ingredient["name"],
        "quantity": ingredient["quantity"] * curServings,
        "unit": ingredient["unit"],
      };
    });
    return newIngredients;
  })
}
