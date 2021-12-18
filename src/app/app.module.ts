import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ApiClientService } from './Services/api-client.service';
import { PersonService } from './Services/person.service';
import { CreatePersonComponent } from './Components/create-person/create-person.component';
import { PersonListComponent } from './Components/person-list/person-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './Components/loading/loading.component';
import { DefaultAvatar } from './pipes/default-avatar.pipe';
import { AgeCalcPipe } from './pipes/age-calc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonComponent,
    PersonListComponent,
    LoadingComponent,
    DefaultAvatar,
    AgeCalcPipe,
  ],
  imports: [BrowserModule, NgbModule, HttpClientModule, ReactiveFormsModule],
  providers: [ApiClientService, PersonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
