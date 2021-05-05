import { TodoService } from '../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private service: TodoService) {}
  todo$ = this.service.todo$;
  ngOnInit(): void {}
}
