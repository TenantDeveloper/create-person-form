import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreatePerson } from '../models/create-person';
import { IPerson } from '../models/person';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private apiClientService: ApiClientService) {}

  createPerson(body: ICreatePerson) {
    return this.apiClientService.create('api/People', body);
  }

  getPerson(): Observable<Array<IPerson>> {
    return this.apiClientService.get('api/People') as Observable<
      Array<IPerson>
    >;
  }
}
