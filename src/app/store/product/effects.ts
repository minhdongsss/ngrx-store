import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, withLatestFrom  } from 'rxjs/operators';
import { ProductsService } from '../../services/product/products.service';
import CONST from './const';
import { productActions } from './actions';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(CONST._ACTION.GET_ALL),
    mergeMap(() => this.productsService.getAll().pipe(
        map(products => {
          return productActions.getAllProductsSuccess({ products })
        }),
        catchError(() => of({ type: CONST._ACTION.GET_ALL_FAIL }))
      ))
    ),
  );

  loadProductDetail$ = createEffect(() => this.actions$.pipe(
    ofType(CONST._ACTION.GET_DETAIL),
    exhaustMap(action => this.productsService.getDetail(action['id']).pipe(
        map(product => {
          return productActions.getDetailSuccess({ product })
        }),
        catchError(() => of({ type: CONST._ACTION.GET_DETAIL_FAIL }))
      ))
    ),
  );

  editProduct$ = createEffect(() => this.actions$.pipe(
    ofType(CONST._ACTION.EDIT_PRODUCT),
    mergeMap(action => this.productsService.editProduct(action['id'], action['name']).pipe(
        map(product => {
          console.log('product', product);
          return productActions.editProductSuccess({ product });
        }),
      )),
      catchError(() => of({ type: CONST._ACTION.EDIT_PRODUCT_FAIL }))
    ),
  );

  // editProductSuccess$ = createEffect(() => this.actions$.pipe(
  //   ofType(CONST._ACTION.EDIT_PRODUCT_SUCCESS),
  //   mergeMap(() => this.productsService.getAll().pipe(
  //       map(products => {
  //         return productActions.getAllProductsSuccess({ products });
  //       }),
  //     )),
  //     catchError(() => of({ type: CONST._ACTION.GET_DETAIL_FAIL }))
  //   ),
  // );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}