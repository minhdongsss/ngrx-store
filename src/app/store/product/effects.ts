import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductsService } from '../../services/product/products.service';
import CONST from './const';
import { productActions } from './actions';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(CONST._ACTION.GET_ALL),
    mergeMap(() => this.productsService.getAll()
      .pipe(
        map(products => {
          return productActions.getAllProductsSuccess({ products })
        }),
        catchError(() => of({ type: CONST._ACTION.GET_ALL_FAIL }))
      ))
    ),
  );
 
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}