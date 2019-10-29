import { Action, createReducer, on } from '@ngrx/store';
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
    ),

    on(productActions.getDetailSuccess, (state, action) => {
        return {
            ...state,
            detail: action.product
            }
        }
    ),

    on(productActions.editProductSuccess, (state, action) => {
        state.products.find((product, index) => product.id === action.product.id &&
        (state.products[index].name = action.product.name))
        return state;
    }),
);

export function reducer(state: ProductState | undefined, action: Action) {
    return productReducer(state, action);
}

export const FEATURE_NAME = 'products';