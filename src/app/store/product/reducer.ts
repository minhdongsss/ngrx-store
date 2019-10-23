import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import { productActions } from './action';
import { initialState, ProductState } from './state';

const productReducer = createReducer(
    initialState,
    on(productActions.getAllProducts, state => ({
        ...state,
        products: [
            {id: 1, name: 'Dong'},
            {id: 2, name: 'Giang'}
        ]
    })),
);

export function reducer(state: ProductState | undefined, action: Action) {
    return productReducer(state, action);
}

export const MODULE_NAME = 'product';