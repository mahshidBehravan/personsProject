import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {PersonsEffects} from './store/persons.effect' ;
import { reducers } from './store/index';
import { PersonsSandbox } from './persons-sandbox';
import { PersonsService } from './services/persons.service';
import { PersonsComponent } from './component/persons/persons.component';
import { PersonListComponent } from './component/persons-list/person-list.component';
import { PersonContainerComponent } from './containers/person-container.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonsRoutingModule,
    SharedModule,
    HttpClientModule,
    EffectsModule.forFeature([PersonsEffects]),
    StoreModule.forFeature('Persons', reducers),
  ],
  declarations: [PersonsComponent, PersonContainerComponent, PersonListComponent ],
  providers: [PersonsSandbox, HttpClient, PersonsService]
})
export class PersonsModule { }
