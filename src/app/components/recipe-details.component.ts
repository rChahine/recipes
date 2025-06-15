import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipesStore} from '../services/recipes.store';

@Component({
  standalone: true,
  selector: 'recipe-details',
  providers: [RecipesStore],
  template: `
    <h1>Annotations</h1>
    @for (annotation of recipe?.annotations; track $index) {
      Note: {{ annotation }} <br/>
    }
    
  `,
})
export class RecipeDetailsComponent {
  readonly activatedRoute = inject(ActivatedRoute)
  readonly store = inject(RecipesStore);
  protected recipe? = this.store.entityMap()[this.activatedRoute.snapshot.params['name']];

}
