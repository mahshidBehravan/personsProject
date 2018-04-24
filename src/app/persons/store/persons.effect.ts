import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs/Rx';
import { empty } from 'rxjs/observable/empty';
import * as personsAction from './persons.action';
import { PersonsService } from '../services/persons.service';
import { Subscription } from 'rxjs/Subscription';
import { Persons } from '../models/persons';

@Injectable()
export class PersonsEffects {

    constructor(private actions$: Actions, private personsService: PersonsService) {
      }
  @Effect()
  getperson$: Observable<Action> = this.actions$.pipe(
    ofType(personsAction.ActionTypes.GET_Persons),
    map((action: personsAction.GetPersons) => action.payload),
    switchMap(() => this.personsService.getpersons() ),
        map(res =>  new personsAction.GetPersonsSuccess(res as Persons[]) )
  );

  @Effect()
  postperson$: Observable<Action> = this.actions$.pipe(
    ofType(personsAction.ActionTypes.Post_Person),
    map((action: personsAction.PostPerson) => action.payload),
    switchMap((person: Persons) => this.personsService.postPersons(person) ),
        map(res =>   new personsAction.PostPersonSuccess(res as Persons))
  );
}


