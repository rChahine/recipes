import {withStorageSync} from '@angular-architects/ngrx-toolkit';
import {patchState, signalStore, withMethods} from '@ngrx/signals';
import {addEntity, removeEntity, SelectEntityId, withEntities} from '@ngrx/signals/entities';


export type Recipe = {
  name: string;
  url: string;
  category: string;
  annotations: string[];
}
const selectId: SelectEntityId<Recipe> = (recipe) => recipe.name;

export const RecipesStore = signalStore(
  withEntities<Recipe>(),
  withMethods((store) => ({
    addRecipe: (recipe: Recipe) => patchState(store, addEntity(recipe, {selectId})),
    deleteRecipe: (recipe: Recipe) => patchState(store, removeEntity(recipe.name)),
  })),
  withStorageSync({
    key: 'ines-recipes',
    autoSync: true,
  }),
);
