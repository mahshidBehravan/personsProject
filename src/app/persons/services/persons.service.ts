import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Persons } from '../models/persons';

@Injectable()
export class PersonsService {

  constructor(private httpclient: HttpClient) { }
  getpersons (): Observable<Persons[]> {
    return this.httpclient.get<Persons[]>
      ( 'http://localhost:8087/persons/GetPerson', {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }),
      });
  }
  postPersons (persons: Persons): Observable<Persons> {
    return this.httpclient.post<Persons>
      ( 'http://localhost:8087/persons/PostPerson', JSON.stringify(persons), {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        })
      });
  }


}
