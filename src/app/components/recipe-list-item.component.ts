import {Component, input} from '@angular/core';
import {MatChip} from '@angular/material/chips';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {Recipe} from '../services/recipes.store';

@Component({
  selector: 'recipe-list-item',
  imports: [MatIcon, MatChip, RouterLink],
  styles: `
    :host {
      padding: .750rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f9f9f9;
    }

    .recipe {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__first-part {
        display: flex;
        gap: 1rem;
      }

      &__title {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  `,
  template: `
    <div class="recipe">
      <div class="recipe__first-part">
        <span class="recipe__title">{{ recipe().name }}</span>
        <mat-chip>{{ recipe().category }}</mat-chip>
      </div>
      <mat-icon [routerLink]="'/recipes/' + recipe().name">remove_red_eye</mat-icon>
      <mat-icon (click)="openRecipe()">link</mat-icon>
    </div>
  `,

})
export class RecipeListItemComponent {
  recipe = input.required<Recipe>();

  openRecipe() {
    window.open(this.recipe().url, '_blank');
  }

}

