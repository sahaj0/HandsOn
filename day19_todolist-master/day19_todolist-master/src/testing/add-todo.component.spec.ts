import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from 'src/app/add-todo/add-todo.component';
import { StoreModule, Store } from '@ngrx/store';
import { todoReducer } from 'src/todo/todo.reducer';
import * as TodoActions from 'src/todo/todo.actions';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTodoComponent],
      imports: [FormsModule, StoreModule.forRoot({ todos: todoReducer })],
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo when clicking "Add Todo"', () => {
    // Spy on the store dispatch method
    const storeDispatchSpy = spyOn(store, 'dispatch');

    // Set a test value in the input field
    component.newTodo = 'Test Todo';

    // Trigger the "Add Todo" button click
    component.addTodo();

    // Verify that the dispatch method was called with the correct action
    expect(storeDispatchSpy).toHaveBeenCalledWith(
        TodoActions.addTodo({ todo: { id: jasmine.any(Number) as unknown as number, title: 'Test Todo', completed: false } })
    );

    // Verify that the newTodo property is cleared after adding a todo
    expect(component.newTodo).toEqual('');
});
});
