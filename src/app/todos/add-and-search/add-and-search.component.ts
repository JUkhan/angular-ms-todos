import { ActionTypes, Todo } from './../../states/appState';
import { TodoService } from './../services/todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-and-search',
  templateUrl: './add-and-search.component.html',
  styleUrls: ['./add-and-search.component.css'],
})
export class AddAndSearchComponent implements OnInit, OnDestroy {
  isSearching = false;
  description = '';
  sub?: Subscription;
  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.sub = this.service.added$.subscribe(() => {
      this.description = '';
    });
  }
  changeInputMode() {
    this.isSearching = !this.isSearching;
    this.description = '';
    this.service.dispatch(ActionTypes.SEARCH_INPUT, '');
  }
  handleInputChange(text: string) {
    if (this.isSearching) {
      this.service.dispatch(ActionTypes.SEARCH_INPUT, text);
      this.description = text;
    }
  }
  handleSubmit(text: string) {
    this.description = text;
    if (!this.isSearching)
      this.service.dispatch(ActionTypes.ADD_TODO, {
        description: text,
        completed: false,
      } as Todo);
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
