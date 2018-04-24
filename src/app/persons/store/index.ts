import {
    ActionReducer, combineReducers, ActionReducerMap, createFeatureSelector, createSelector
  } from '@ngrx/store';
  import { compose } from '@ngrx/core/compose';
  import * as fromPersons from './persons.reducer';
  import * as fromReducer from './persons.reducer';
  import * as fromRoot from '../../index';

export interface PersonsState {
    PersonState: fromReducer.State;
  }
  export interface State extends fromRoot.State {
    Persons: PersonsState;
  }
  export const reducers: ActionReducerMap<PersonsState> = {
   PersonState: fromReducer.reducer,
  };

  const PersonsFeatureState = createFeatureSelector<PersonsState>('Persons');
  export const PersonState = createSelector(PersonsFeatureState, s => s.PersonState);

  export const PersonData = createSelector(PersonState, fromPersons.getPersonDate);
  export const PersonsData = createSelector(PersonState, fromPersons.getPersonsDate);

  