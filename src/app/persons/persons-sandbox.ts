import { Injectable } from '@angular/core';
import { PersonsService } from './services/persons.service';
import { Store } from '@ngrx/store';
import * as fromIndex from './store/index';
import * as personsAction from './store/persons.action';
import * as store from './store/index';
import { Persons } from './models/persons';

@Injectable()
export class PersonsSandbox {

  public Persons$ = this.appState$.select(store.PersonsData);



  constructor(  private appState$: Store<fromIndex.State>) { }

  public getPersons() {
     this.appState$.dispatch(new personsAction.GetPersons());
  }

  public PostPerson(persons: Persons) {
    this.appState$.dispatch(new personsAction.PostPerson(persons));

  }

}
