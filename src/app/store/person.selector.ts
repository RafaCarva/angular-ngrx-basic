import * as fromPersonReducer from './person.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const peopleState = createFeatureSelector<fromPersonReducer.PeopleState>('people');

// fromPersonReducer.peopleAdapter.getSelectors(peopleState);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = fromPersonReducer.peopleAdapter.getSelectors(peopleState);
