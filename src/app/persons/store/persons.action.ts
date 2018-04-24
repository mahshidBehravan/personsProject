
import { Action } from '@ngrx/store';
import { Persons } from '../models/persons';

export const ActionTypes = {

    GET_Persons: '[Persons] Get_Persons',
    Get_Persons_Success : '[Persons] Get_Persons_success',
    Post_Person: '[Persons] Post_Persons',
    Post_Person_Success: '[Persons] Post_Person_Success'
};

export class GetPersons implements Action {
    type = ActionTypes.GET_Persons;
    constructor(public payload: any= null) { }
}
export class GetPersonsSuccess implements Action {
    debugger;
    type = ActionTypes.Get_Persons_Success;
    constructor(public payload: Persons[]) { }
}
export class PostPerson implements Action {
    type = ActionTypes.Post_Person;
    constructor(public payload: Persons) { }
}
export class PostPersonSuccess implements Action {
    type = ActionTypes.Post_Person_Success;
    constructor(public payload: Persons) { }
}
export type Actions
    = GetPersons
    | GetPersonsSuccess
    | PostPerson
    | PostPersonSuccess;
