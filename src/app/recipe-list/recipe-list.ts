import { Component, computed, input, signal } from '@angular/core';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeModel } from '../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeDetail, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  readonly searchTerm = input<string>('');
  protected readonly recipes = signal<RecipeModel[]>(MOCK_RECIPES);

  protected readonly filteredRecipes = computed(() => {
    return this.recipes().filter((recipe) => {
      const recipeName = recipe.name;
      return recipeName.toLowerCase().includes(this.searchTerm().toLocaleLowerCase());
    });
  });
}
