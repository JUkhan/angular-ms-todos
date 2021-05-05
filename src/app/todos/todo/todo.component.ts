import { TodoService } from './../services/todo.service';
import { Todo, ActionTypes } from './../../states/appState';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {} as any;
  isDblclick = false;
  constructor(private service: TodoService) {}

  ngOnInit(): void {}

  update(completed: boolean) {
    this.service.dispatch(ActionTypes.UPDATE_TODO, { ...this.todo, completed });
  }
  removeTodo() {
    this.service.dispatch(ActionTypes.REMOVE_TODO, this.todo);
  }
  blurHandler() {
    this.isDblclick = false;
  }
  submit(description: string) {
    this.service.dispatch(ActionTypes.UPDATE_TODO, {
      ...this.todo,
      description,
    });
  }
}
