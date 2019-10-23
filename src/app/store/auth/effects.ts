import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {
  authActions
} from './action';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
        ofType(authActions.login),
        exhaustMap(action =>
            this.authService.login(action.credentials).pipe(
            map(user => authActions.loginSuccess({payload: { user }})),
            catchError(error => of(authActions.loginFailure({payload: error })))
            )
        )
        )
    );
}