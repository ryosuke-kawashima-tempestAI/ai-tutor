import { Component, signal } from '@angular/core';
// import { RecipeList } from './recipe-list/recipe-list';
// import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly searchTerm = signal<string>('');
}
