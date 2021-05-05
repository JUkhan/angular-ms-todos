import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-todos',
  templateUrl: './active-todos.component.html',
  styleUrls: ['./active-todos.component.css'],
})
export class ActiveTodosComponent implements OnInit {
  constructor(private service: TodoService) {}
  activeTodo$ = this.service.activeTodo$;
  ngOnInit(): void {}
}
