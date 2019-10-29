import { Person } from '../person';
import { ActionReducerMap } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

export interface AppState {
  people: Person[];
}

export const appReducers: ActionReducerMap<AppState> = {
  people: fromPersonReducer.reducer
}
