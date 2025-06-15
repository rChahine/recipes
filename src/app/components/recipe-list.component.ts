import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';
import {RecipesStore} from '../services/recipes.store';
import {RecipeListItemComponent} from './recipe-list-item.component';

@Component({
  selector: 'recipe-list', providers: [RecipesStore],
  imports: [RecipeListItemComponent, MatToolbarModule, RouterLink, MatButtonModule],
  template: `
    <mat-toolbar>
      <mat-toolbar-row>
        <div class="flex">
          <span>Ma liste de recette</span>
          <button matButton="filled" routerLink="/create">Ajouter</button>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
    <div class="recipes">
      @for (recipe of store.entities(); track recipe.name) {
        <recipe-list-item [recipe]="recipe"/>
      }
      <div class="list-item"></div>
    </div>
  `,
  styles: `
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .recipes {
      display: flex;
      flex-direction: column;
      margin: 1rem;
      gap: 1rem;
    }`
})
export class RecipeListComponent {
  store = inject(RecipesStore);
}
