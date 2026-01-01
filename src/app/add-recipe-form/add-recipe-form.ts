import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Recipe } from '../recipe'; // Import the Recipe service

@Component({
  selector: 'app-add-recipe-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-recipe-form.html',
  styleUrl: './add-recipe-form.css',
})
export class AddRecipeForm {
  private readonly fb = inject(FormBuilder);
  private readonly recipeService = inject(Recipe); // Inject the Recipe service

  protected readonly recipeForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  protected onSubmit(): void {
    if (this.recipeForm.valid) {
      // The form value is compatible with what our service expects
      const newRecipe = this.recipeForm.getRawValue();

      // We need to check if the value is not null or undefined
      if (newRecipe.name && newRecipe.description) {
        this.recipeService.addRecipe(newRecipe as { name: string, description: string });
        console.log('New Recipe Added:', newRecipe);
        this.recipeForm.reset();
      }

    } else {
      console.log('Form is invalid.');
    }
  }
}
