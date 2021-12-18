import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from 'src/app/models/person';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  data$: Observable<Array<IPerson>>;
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.data$ = this.personService.getPerson();
  }
}
