import { Injectable } from '@angular/core';
import { MonoStore } from 'mono-state';
import { AppState } from '../states/appState';
import { todos } from '../states/todos';
import { visibilittyFilter } from '../states/visibilityFilter';

@Injectable({
  providedIn: 'root',
})
export class StoreService extends MonoStore<AppState> {
  constructor() {
    super([todos, visibilittyFilter]);
  }
}
