// user.component.spec.ts
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { UserComponent } from 'src/app/user/user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockActivatedRoute: any;
  let mockUserService: any;

  beforeEach(waitForAsync(() => {
    mockActivatedRoute = {
      params: of({ id: 1 }), // Mock params object with id = 1
    };

    mockUserService = {
      getUserDetails: jasmine
        .createSpy('getUserDetails')
        .and.returnValue(of({ id: 1, name: 'John Doe' })), // Mock getUserDetails to return a user object
    };

    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: UserService, useValue: mockUserService },
      ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should fetch user data based on id parameter', waitForAsync(() => {
    fixture.whenStable().then(() => { // Wait for the asynchronous operations to complete
      expect(component.user).toEqual({ id: 1, name: 'John Doe' });
      expect(mockUserService.getUserDetails).toHaveBeenCalledWith(1);
    });
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
