import { createSelector } from '@ngrx/store';
import { ProductState } from './model';

export const selectProducts = (state: ProductState) => state.products;
export const selectorProducts = createSelector(selectProducts, null);