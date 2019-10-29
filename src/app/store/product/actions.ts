import { createAction, props } from '@ngrx/store';
import CONST from './const';

const getAllProducts = createAction(CONST._ACTION.GET_ALL);
const getAllProductsSuccess = createAction(
    CONST._ACTION.GET_ALL_SUCCESS,
    props<{ products }>()
);

const getDetail = createAction(
    CONST._ACTION.GET_DETAIL,
    props<{ id }>()
);
const getDetailSuccess = createAction(
    CONST._ACTION.GET_DETAIL_SUCCESS,
    props<{ product }>()
);

const editProduct = createAction(
    CONST._ACTION.EDIT_PRODUCT,
    props<{ id; name }>()
    );
const editProductSuccess = createAction(
    CONST._ACTION.EDIT_PRODUCT_SUCCESS,
    props<{ product }>()
);

export const productActions = {
    getAllProducts,
    getAllProductsSuccess,
    getDetail,
    getDetailSuccess,
    editProduct,
    editProductSuccess
};