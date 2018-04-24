import { Component, OnInit } from '@angular/core';
import { PersonsSandbox } from '../persons-sandbox';
import { Persons } from '../models/persons';

@Component({
  selector: 'app-person-container',
  templateUrl: './person-container.component.html',
  styleUrls: ['./person-container.component.css']
})
export class PersonContainerComponent implements OnInit {
  PersonsList: Persons[];
  constructor(private personsSandbox: PersonsSandbox) { }

  ngOnInit() {
   this. getPersonList();
  }

  submitForm(person: Persons) {
    this.personsSandbox.PostPerson(person);
  }

  getPersonList() {
    this.personsSandbox.getPersons();
    this.personsSandbox.Persons$.subscribe(person => {
      if (person) {
        this.PersonsList = person;
      }
    });
  }

  tabChanged() {
    this.getPersonList();
  }
}
