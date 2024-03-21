// add-todo.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from 'src/todo/todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  newTodo = '';

  constructor(private store: Store) {}

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.store.dispatch(TodoActions.addTodo({ todo: { id: Date.now(), title: this.newTodo, completed: false } }));
      this.newTodo = '';
    }
  }
}
