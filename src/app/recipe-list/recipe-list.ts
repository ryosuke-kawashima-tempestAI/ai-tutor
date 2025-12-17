import { Component, signal} from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
// This is the entry point of this component
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  // Data Transaction
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly recipes: RecipeModel[] = MOCK_RECIPES;
  // This is passed to RecipeDetail.
  protected readonly activeRecipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected showCarbonara(): void {
    this.activeRecipe.set(MOCK_RECIPES[0]);
  }
  protected showCapreseSalad(): void {
    this.activeRecipe.set(MOCK_RECIPES[1]);
  }
}
