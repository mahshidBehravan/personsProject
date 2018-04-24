import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonsSandbox } from '../../persons-sandbox';
import { Persons } from '../../models/persons';

@Component({
  selector: 'app-person',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  @Output() submitPerson = new EventEmitter();
  firstPersonForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.firstPersonForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: [''],
      email: ['', Validators.pattern(this.emailPattern)],
      birthdate: ['']
    });
  }

  onSubmit() {
    if (this.firstPersonForm.valid) {
      const personDate: Persons = {
        name: this.firstPersonForm.get('name').value,
        lastName: this.firstPersonForm.get('lastname').value,
        phone: this.firstPersonForm.get('phone').value,
        email: this.firstPersonForm.get('email').value,
        birthdate: this.firstPersonForm.get('birthdate').value,
        personId: null

      };
     this.submitPerson.emit(personDate);
    }
  }
}

