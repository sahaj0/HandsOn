// todo.actions.ts
import { createAction, props } from "@ngrx/store";
import { Todo } from "./todo.model";

// Write code here to define actions for adding a Todo, removing a Todo, and marking a Todo as completed.

export const addTodo = createAction("[Todo] Add Todo", props<{ todo: Todo }>());
export const removeTodo = createAction(
  "[Todo] Remove Todo",
  props<{ id: number }>()
);
export const toggleTodo = createAction(
  "[Todo] Toggle Todo",
  props<{ id: number }>()
);
