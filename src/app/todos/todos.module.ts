import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoService } from './services/todo.service';
import { LoadingComponent } from './loading/loading.component';
import { FocusDirective } from './directives/focus.directive';
import { ErrorComponent } from './error/error.component';
import { TodoComponent } from './todo/todo.component';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ActiveTodosComponent } from './active-todos/active-todos.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { AddAndSearchComponent } from './add-and-search/add-and-search.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LinkComponent } from './link/link.component';
import { LinksContainerComponent } from './links-container/links-container.component';

@NgModule({
  declarations: [
    TodosComponent,
    LoadingComponent,
    FocusDirective,
    ErrorComponent,
    TodoComponent,
    ToolbarComponent,
    ActiveTodosComponent,
    TodoInputComponent,
    AddAndSearchComponent,
    TodoListComponent,
    LinkComponent,
    LinksContainerComponent,
  ],
  imports: [CommonModule, TodosRoutingModule],
  providers: [TodoService],
})
export class TodosModule {}
