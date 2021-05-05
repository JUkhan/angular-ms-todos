import { ActionTypes, SearchCategory } from './../../states/appState';
import { TodoService } from './../services/todo.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  @Input() searchCategory: any = SearchCategory.all;

  constructor(private service: TodoService) {}

  active$ = this.service.activeFilterCategory$;

  ngOnInit(): void {}

  changeTodoFilter() {
    this.service.dispatch(
      ActionTypes.CHANGE_SEARCH_CATEGORY,
      +this.searchCategory
    );
  }
}
