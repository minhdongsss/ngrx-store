import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './state';
export const featureKey = 'products';

export const selectProducts = createFeatureSelector<ProductState>(featureKey);
export const selectorProducts = createSelector(selectProducts, ({ products }) => products);

export const selectProduct = createFeatureSelector<ProductState>(featureKey);
export const selectorProduct = createSelector(selectProduct, ({ detail }) => detail);