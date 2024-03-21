import * as TodoActions from 'src/todo/todo.actions';
import { Todo } from 'src/todo/todo.model';

describe('Todo Actions', () => {
  it('should create an action to add a todo', () => {
    const todo: Todo = { id: 1, title: 'Test Todo', completed: false };
    const action = TodoActions.addTodo({ todo });
    expect(action.type).toEqual('[Todo] Add Todo');
    expect(action.todo).toEqual(todo);
  });

  it('should create an action to remove a todo', () => {
    const id = 1;
    const action = TodoActions.removeTodo({ id });
    expect(action.type).toEqual('[Todo] Remove Todo');
    expect(action.id).toEqual(id);
  });

  it('should create an action to toggle a todo', () => {
    const id = 1;
    const action = TodoActions.toggleTodo({ id });
    expect(action.type).toEqual('[Todo] Toggle Todo');
    expect(action.id).toEqual(id);
  });
});
