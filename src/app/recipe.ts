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
}
