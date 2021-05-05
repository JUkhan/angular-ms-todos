import { Action } from 'mono-state';
import { ActionTypes, SearchCategory, Todo } from './../../states/appState';
import { StoreService } from './../../services/store.service';
import { Injectable } from '@angular/core';
import {
  exhaustMap,
  repeat,
  takeUntil,
  endWith,
  startWith,
  map,
  debounceTime,
  distinctUntilChanged,
  delay,
  mapTo,
  pluck,
} from 'rxjs/operators';
import { tween } from './tween';
import { merge } from 'rxjs';
import { combineLatest } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(private store: StoreService) {
    console.log('---construct---todoService');

    store.action$
      .whereType(ActionTypes.SEARCH_INPUT)
      .pipe(
        debounceTime(320),
        distinctUntilChanged(),
        map(({ payload }) => ({ type: ActionTypes.SEARCHING_TODOS, payload }))
      )
      .subscribe(store.dispatch);
  }

  dispatch(type: string | symbol | Action, payload?: any) {
    this.store.dispatch(type, payload);
  }
  activeFilterCategory$ = this.store.select((state) => state.searchCategory);
  todo$ = combineLatest([
    this.store.select((state) => state.searchCategory),
    this.store.select((state) => state.todos),
    this.store.action$.whereType(ActionTypes.SEARCHING_TODOS).pipe(
      map((action) => action.payload),
      startWith('')
    ),
  ]).pipe(
    map(([search, todos, searchText]) => {
      if (searchText) {
        todos = todos.filter((todo: Todo) =>
          todo.description.toLowerCase().includes(searchText)
        );
      }
      switch (search) {
        case SearchCategory.active:
          return todos.filter((todo: Todo) => !todo.completed);
        case SearchCategory.completed:
          return todos.filter((todo: Todo) => todo.completed);
        default:
          return todos;
      }
    })
  );
  activeTodo$ = this.store
    .select((state) => state.todos)
    .pipe(
      map((todos) =>
        todos.reduce((sum, todo) => sum + (todo.completed ? 0 : 1), 0)
      ),
      map((nums) => `${nums} items left`)
    );

  get loading$() {
    const start$ = this.store.action$.whereType(ActionTypes.SPINNING_START);
    const end$ = this.store.action$.whereType(ActionTypes.SPINNING_END);
    const error$ = this.store.action$.whereType(ActionTypes.TODOS_ERROR);
    return start$.pipe(
      exhaustMap(() =>
        tween(0, 365, 500).pipe(
          repeat(),
          takeUntil(merge(end$, error$)),
          endWith(0)
        )
      )
    );
  }

  get error$() {
    const error$ = this.store.action$.whereType(ActionTypes.TODOS_ERROR);
    return merge(
      error$.pipe(pluck('payload')),
      error$.pipe(delay(2000), mapTo(''))
    );
  }

  get updated$() {
    const updated$ = this.store.action$.whereType(ActionTypes.TODOS_UPDATED);
    return updated$.pipe(mapTo(true));
  }

  get added$() {
    const added$ = this.store.action$.whereType(ActionTypes.TODOS_ADDED);
    return added$.pipe(mapTo(true));
  }
}
