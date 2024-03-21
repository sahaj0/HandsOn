import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1>Todo List</h1>
  <app-add-todo></app-add-todo>
  <app-todo-list></app-todo-list>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx_todo_list_solution';
}
