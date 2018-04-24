import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Persons } from '../../models/persons';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
 @Input() dataSource: Persons[];
  displayedColumns = ['Name', 'LastName', 'Phone', 'Email', 'Birthdate'];
  constructor() { }
  ngOnInit() {
  }

}
