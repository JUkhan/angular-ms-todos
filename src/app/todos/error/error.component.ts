import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  constructor(private service: TodoService) {}
  error$ = this.service.error$;
  ngOnInit(): void {}
}
