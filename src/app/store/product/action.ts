import { createAction, props } from '@ngrx/store';
import CONST from './const';

const getAllProducts = createAction(CONST._ACTION.GET_ALL);

export const productActions = {
    getAllProducts
};