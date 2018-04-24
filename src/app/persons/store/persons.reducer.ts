import * as actions from './persons.action';
import { Persons } from '../models/persons';

export interface State {
    personData: Persons;
    personsData: Persons[];
}
const INITIAL_STATE: State = {
    personData: null,
    personsData: null
};


export function reducer(state: State = INITIAL_STATE, action: actions.Actions): State {

    switch (action.type) {
        case actions.ActionTypes.GET_Persons:
        {
            debugger;
            return Object.assign({}, state, {
                personsData: action.payload
            });
        }
        case actions.ActionTypes.Get_Persons_Success :
        {
            debugger;
            return Object.assign({}, state, {
                personsData: action.payload
            });
        }
        case actions.ActionTypes.Post_Person :
        {
            return Object.assign({}, state, {
                personData: action.payload
            });
        }
        case actions.ActionTypes.Post_Person_Success :
        {
            return Object.assign({}, state, {
                personData: action.payload
            });
        }
            default: {
                return state;
            }
        }
    }
    export const getPersonDate = (state: State) => state.personData;
    export const getPersonsDate = (state: State) => state.personsData;
