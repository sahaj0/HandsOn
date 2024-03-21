import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Issue } from 'src/app/models/Issue';
import { IssueService } from 'src/app/services/issue.service';
import { ReactiveFormsModule} from '@angular/forms';
import { IssueComponent } from './issue.component';


describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;
  let issueService: IssueService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, ReactiveFormsModule],
      declarations: [ IssueComponent ],
      providers: [IssueService]
    })
    .compileComponents();
    issueService = TestBed.get(IssueService);
    spyOn(issueService, 'addIssue').and.returnValue(of(''));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test to Check if Issue component exists
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSubmit() should exist', () => {
    // checking that the onSubmit method is defined
    expect(component.onSubmit).toBeDefined();
  
    // checking that the onSubmit method is a function
    expect(typeof component.onSubmit).toEqual('function');
  });

  // test to check ngOnInit method existence
  it('ngOnInit() should exists', () => {

    expect(component.ngOnInit).toBeDefined();
    expect(typeof component.ngOnInit).toEqual('function');

  });

  // test to check clearForm method existence
  it('clearForm() should exists', () => {

    expect(component.clearForm).toBeDefined();
    expect(typeof component.clearForm).toEqual('function');
  });

  // test to check if title form field validates input correctly
  //setting an invalid value and checking it is valid or mot
it('testing title field validity', () => {
  // Set an invalid value for the title
  component.form.controls['title'].setValue('');
  
  // Check if the title field is invalid
  expect(component.form.controls['title'].valid).toBeFalsy();
});

 // test to check if description form field validates input correctly
it('testing description field validity', () => {
  // Setting an invalid value for the description
  component.form.controls['description'].setValue('');
  
  // Checking if the description field is invalid
  expect(component.form.controls['description'].valid).toBeFalsy();
});

 // test to check onSubmit is calling IssueService or not
it('onSubmit() should call IssueService to add a Issue', () => {
  // Set valid values for the form fields
  component.form.setValue({
    title: 'Test Title',
    description: 'Test Description'
  });

  // Trigger the onSubmit method
  component.onSubmit();

  // Check if the addIssue method of the issueService was called with the correct arguments
  expect(issueService.addIssue).toHaveBeenCalledWith({
    title: 'Test Title',
    description: 'Test Description'
  });
});
});
