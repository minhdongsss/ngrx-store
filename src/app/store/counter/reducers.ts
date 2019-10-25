import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './actions';
import { initialState } from './object';

const _counterReducer = createReducer(initialState,
    on(increment, state => ({
      ...state,
      count: state.count + 1
    })),
    on(decrement, state => ({
        ...initialState,
        count: state.count - 1
    })),
    on(reset, state => ({
        ...state,
        count: 0,
    })),
);

export function counterReducer(state, action) {
    if(state) {
        return _counterReducer(state.count, action);
    }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/