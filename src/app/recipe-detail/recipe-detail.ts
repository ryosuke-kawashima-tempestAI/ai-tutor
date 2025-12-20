import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';
// import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  // you receive this from RecipeList
  readonly recipe = input.required<RecipeModel>();
  protected readonly servings = signal(1);

  protected increment(): void {
    this.servings.update(counter => counter + 1);
  }

  protected decrement(): void {
    // Prevents servings from going below 1
    this.servings.update(counter => (counter > 1 ? counter - 1 : 1));
  }

  protected readonly adjustedIngredients = computed(() => {
    const currentRecipe = this.recipe(); // Read signal once

    // Guard Clause: If there's no recipe yet, return an empty array.
    if (!currentRecipe) {
      return [];
    }

    const curServings = this.servings();
    
    // Now that we have the guard, we can safely access ingredients.
    return currentRecipe.ingredients.map(ingredient => ({
      name: ingredient.name,
      quantity: ingredient.quantity * curServings,
      unit: ingredient.unit,
    }));
  });
}
