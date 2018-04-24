import { Action, ActionReducerMap } from '@ngrx/store';

export interface State {
    status: boolean;
}

export const initialState: State = {
    status: true
};

export function reducer(state: boolean = false, action: Action): boolean {
    return true;
}

export const reducers: ActionReducerMap<State> = {
    status: reducer
};

