import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import { productActions } from './action';
import { initialState } from './state';
import { ProductState } from './model';
const productReducer = createReducer(
    initialState,
    on(productActions.getAllProductsSuccess, (state, action) => ({
        ...state,
        products: action.products
    })),
);

export function reducer(state: ProductState | undefined, action: Action) {
    return productReducer(state, action);
}

export const MODULE_NAME = 'product';