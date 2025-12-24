import { Injectable } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  protected readonly recipes = MOCK_RECIPES;
  public getRecipes() {
    return this.recipes;
  }
  public getRecipeById(id: number) {
    return this.recipes.find((recipe) => recipe.id === id);
  }
}
