import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from 'src/app/todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from 'src/todo/todo.reducer';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [
        StoreModule.forRoot({ todos: todoReducer }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases as needed
});
