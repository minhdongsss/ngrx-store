import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import { productActions } from './actions';
import { initialState, ProductState } from './state';
const productReducer = createReducer(
    initialState,
    on(productActions.getAllProductsSuccess, (state, action) => {
            return {
                ...state,
                products: action.products
            }
        }
    )
);

export function reducer(state: ProductState | undefined, action: Action) {
    return productReducer(state, action);
}

export const FEATURE_NAME = 'products';