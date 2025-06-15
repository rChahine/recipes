import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {RecipesStore} from '../services/recipes.store';

@Component({
  selector: 'recipe-create',
  providers: [RecipesStore],
  imports: [
    ReactiveFormsModule,
    MatLabel,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput
  ],
  styles: `
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      margin: 0 15px 0 15px;

      &__title {
        text-align: center;
      }
    }`,
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="wrapper">
      <h1 class="wrapper__title">Ajouter une nouvelle recette</h1>
      <mat-form-field appearance="fill">
        <mat-label>Nom</mat-label>
        <input matInput formControlName="name" required>
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>URL</mat-label>
        <input matInput formControlName="url" required>
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Categorie</mat-label>
        <input matInput formControlName="category" required>
      </mat-form-field>

      <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">Ajouter</button>
    </form>
  `,

})
export class RecipeCreateComponent {
  readonly #fb = inject(FormBuilder);
  readonly #store = inject(RecipesStore);

  form = this.#fb.group({
    name: ['', Validators.required],
    url: ['', [Validators.required, Validators.pattern('https?://.+')]],
    category: ['', Validators.required],
  });


  onSubmit() {
    if (this.form.valid) {
      const {name, url, category} = this.form.value;
      this.#store.addRecipe({name: name ?? '', url: url ?? '', category: category ?? '', annotations: []})
      this.form.reset();
    }
  }

}

