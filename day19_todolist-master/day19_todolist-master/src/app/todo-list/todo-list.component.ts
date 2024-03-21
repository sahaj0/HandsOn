// todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TodoActions from 'src/todo/todo.actions';
import { Todo } from 'src/todo/todo.model';
import { selectTodos } from 'src/todo/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectTodos);
  }

  ngOnInit() {}

  toggleTodo(id: number) {
    this.store.dispatch(TodoActions.toggleTodo({ id }));
  }

  removeTodo(id: number) {
    this.store.dispatch(TodoActions.removeTodo({ id }));
  }
}
