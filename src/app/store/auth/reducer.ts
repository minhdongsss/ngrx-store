import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import { authActions } from './action';
import { initialState, AuthState } from './state';

const productReducer = createReducer(
    initialState,
    on(authActions.loginSuccess, (state, action) => ({
        ...state,
        email: action.payload.user.email,
        token: action.payload.user.token,
        refreshToken: action.payload.user.refreshToken,
    })),
    on(authActions.loginFailure, (state, action) => ({
        ...state,
        error: action.payload.error.email,
    })),
);

export function reducer(state: AuthState | undefined, action: Action) {
    return productReducer(state, action);
}

export const MODULE_NAME = 'product';