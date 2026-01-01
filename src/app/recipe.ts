import { Injectable, signal } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  protected readonly recipes = signal<RecipeModel[]>(MOCK_RECIPES);

  public getRecipes() {
    return this.recipes();
  }

  public getRecipeById(id: number) {
    return this.recipes().find((recipe) => recipe.id === id);
  }

  public addRecipe(newRecipeData: { name: string, description: string }): void {
    const recipeArray = this.recipes();
    const max_id = recipeArray.length > 0 ? Math.max(...recipeArray.map((recipe) => recipe.id)) : 0;
    const newRecipe: RecipeModel = {
      "id": max_id + 1,
      "name": newRecipeData.name,
      "description": newRecipeData.description,
      "imgUrl": "https://via.placeholder.com/300x200.png?text=New+Recipe",
      "isFavorite": false,
      "ingredients": []
    };
    this.recipes.update(recipes => [...recipes, newRecipe]);
  }
}
