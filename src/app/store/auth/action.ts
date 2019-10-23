import { createAction, props } from '@ngrx/store';
import CONST, { Credentials } from './const';

const login = createAction(
    CONST.AUTH_ACTION.LOGIN,
    props<{ credentials: Credentials }>()
);

const loginSuccess = createAction(CONST.AUTH_ACTION.LOGIN_SUCCESS,
    props<{ payload: { user } }>());
const loginFailure = createAction(CONST.AUTH_ACTION.LOGIN_FAIL,
    props<{ payload: { error } }>());

export const authActions = {
    login,
    loginSuccess,
    loginFailure
};