import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-recipe-form.html',
  styleUrl: './add-recipe-form.css',
})
export class AddRecipeForm {
  // FormBuilder generates FormGroup and FormControl(A FormGroup includes FromControls)
  private readonly fb = inject(FormBuilder);
  protected readonly recipeForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });
  protected onSubmit(): void {
    if (this.recipeForm.valid) {
      const newRecipe = this.recipeForm.value;
      console.log('New Recipe:', newRecipe);
      this.recipeForm.reset();
    } else {
      console.log('Form is invalid.')
    }
  }
}
