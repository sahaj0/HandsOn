// todo.reducer.ts
import { createReducer, on } from "@ngrx/store";
import * as TodoActions from "./todo.actions";
import { Todo } from "./todo.model";

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  // Write code here to implement reducers to handle the state changes for each action (addTodo,removeTodo and toggleTodo).

  initialState,
  on(TodoActions.addTodo, (state, { todo }) => {
    return {
      ...state,
      todos: [...state.todos, todo],
    };
  }),
  on(TodoActions.removeTodo, (state, { id }) => {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    };
  }),

  on(TodoActions.toggleTodo, (state, { id }) => {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    };
  })
);
