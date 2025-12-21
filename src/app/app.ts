import { Component, signal } from '@angular/core';
import { RecipeList } from './recipe-list/recipe-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipeList, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly searchTerm = signal<string>('');
}
