// todo.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

// selectors to retrieve specific slices of the state, such as the list of todos and the completed todos.

export const selectTodos = createSelector(
  selectTodoState,
  state => state.todos
);

export const selectCompletedTodos = createSelector(
  selectTodos,
  todos => todos.filter(todo => todo.completed)
);

export const selectActiveTodos = createSelector(
  selectTodos,
  todos => todos.filter(todo => !todo.completed)
);
