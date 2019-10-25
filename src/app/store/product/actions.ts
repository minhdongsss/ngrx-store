import { createAction, props } from '@ngrx/store';
import CONST from './const';

const getAllProducts = createAction(CONST._ACTION.GET_ALL);
const getAllProductsSuccess = createAction(
    CONST._ACTION.GET_ALL_SUCCESS,
    props<{ products }>()
);

export const productActions = {
    getAllProducts,
    getAllProductsSuccess
};