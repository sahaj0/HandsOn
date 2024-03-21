import { todoReducer, initialState } from 'src/todo/todo.reducer';
import * as TodoActions from 'src/todo/todo.actions';
import { Todo } from 'src/todo/todo.model';

describe('Todo Reducer', () => {
  it('should add a todo', () => {
    const todo: Todo = { id: 1, title: 'Test Todo', completed: false };
    const action = TodoActions.addTodo({ todo });
    const state = todoReducer(initialState, action);
    expect(state.todos).toEqual([todo]);
  });

  it('should remove a todo', () => {
    const initialStateWithTodo: any = { todos: [{ id: 1, title: 'Test Todo', completed: false }] };
    const action = TodoActions.removeTodo({ id: 1 });
    const state = todoReducer(initialStateWithTodo, action);
    expect(state.todos).toEqual([]);
  });

  it('should toggle a todo', () => {
    const initialStateWithTodo: any = { todos: [{ id: 1, title: 'Test Todo', completed: false }] };
    const action = TodoActions.toggleTodo({ id: 1 });
    const state = todoReducer(initialStateWithTodo, action);
    expect(state.todos[0].completed).toEqual(true);
  });
});
