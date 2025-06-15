import {Routes} from '@angular/router';
import {RecipeCreateComponent} from './components/recipe-create.component';
import {RecipeDetailsComponent} from './components/recipe-details.component';
import {RecipeListComponent} from './components/recipe-list.component';

export const routes: Routes = [
  {path: '', redirectTo: "/index", pathMatch: 'full'},
  {path: 'index', component: RecipeListComponent},
  {path: 'create', component: RecipeCreateComponent},
  {path: 'recipes/:name', component: RecipeDetailsComponent}
];
