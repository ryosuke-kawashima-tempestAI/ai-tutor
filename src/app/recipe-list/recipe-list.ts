import { Component, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeModel } from '../models';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected readonly activeRecipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected showCarbonara(): void {
    this.activeRecipe.set(MOCK_RECIPES[0]);
  }

  protected showCapreseSalad(): void {
    this.activeRecipe.set(MOCK_RECIPES[1]);
  }
}
