import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [JsonPipe],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  // you receive this from RecipeList
  protected readonly recipe = input<RecipeModel>();
  protected readonly servings = signal(1);
  protected increment(): void {
    this.servings.update(counter => {
      return counter + 1;
    });
  }
  protected decrement(): void {
    this.servings.update(counter => {
      return counter - 1;
    });
  }
  protected readonly adjustedIngredients = computed(() => {
    const originalIngredients = this.recipe()?.ingredients;
    const curServings = this.servings();
    const newIngredients = originalIngredients?.map(ingredient => {
      const adjustedIngredient = {
        "name": ingredient["name"],
        "quantity": ingredient["quantity"] * curServings,
        "unit": ingredient["unit"]
      };
      return adjustedIngredient;
    });
    // this is the return value of computed function.
    return newIngredients;
  });
}
