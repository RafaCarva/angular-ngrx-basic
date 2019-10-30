import { selectPeople, selectPeopleCount } from './store/index';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';
import * as faker from 'faker';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { PersonNew, PersonAll, PersonUpdate, PersonDelete } from './store/person.actions';
import * as fromPersonSelectors from './store/person.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people$: Observable<Person[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new PersonAll());
    // this.people$ = this.store.pipe(select('people'));
    this.people$ = this.store.select(fromPersonSelectors.selectAll);

  }

  addNew() {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round( Math.random() * 100 ),
      _id: new Date().getMilliseconds().toString()
    };
    this.store.dispatch(new PersonNew({person}));
  }

  update(p: Person) {
    p.name = faker.name.findName();
    p.address = faker.address.streetAddress();
    p.city = faker.address.city();
    p.country = faker.address.country();
    p.age = Math.round( Math.random() * 100 );

    this.store.dispatch( new PersonUpdate({id: p._id, changes: p}) );
  }

  delete(p: Person) {
    this.store.dispatch(new PersonDelete({id: p._id}));
  }
}



