import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from 'src/app/Services/person.service';
import * as countries from '../../../assets/json/countries.json';
@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
})
export class CreatePersonComponent implements OnInit {
  form: FormGroup;
  countries: Array<any>;
  loadingForm: boolean = false;
  constructor(private fb: FormBuilder, private personService: PersonService) {}

  ngOnInit(): void {
    this.initForm();
    this.getCountries();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      avatar: [''],
      country: [''],
    });
  }

  getCountries() {
    this.countries = countries['default'];
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get dob() {
    return this.form.get('dob');
  }

  onSubmit() {
    this.loadingForm = true;
    this.personService.createPerson(this.form.value).subscribe((_) => {
      this.loadingForm = false;
    });
  }
}
