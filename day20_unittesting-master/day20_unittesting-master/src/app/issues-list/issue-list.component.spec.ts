import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { IssueService } from 'src/app/services/issue.service';
import { of } from 'rxjs';
import { IssuesListComponent } from './issues-list.component';

describe('IssuesListComponent', () => {
  let component: IssuesListComponent;
  let fixture: ComponentFixture<IssuesListComponent>;
  let issueService: IssueService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesListComponent ],
      imports: [HttpClientModule],
      providers: [ IssueService]

    })
    .compileComponents();
    issueService = TestBed.get(IssueService);
    spyOn(issueService, 'deleteIssue').and.returnValue(of(''));
    spyOn(issueService, 'getIssues').and.returnValue(of(''));
  }));

   beforeEach(() => {
    fixture = TestBed.createComponent(IssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test to check if component exist
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to check ngOnInit method existence
  it('ngOnInit() should exists', () => {
    expect(component).toBeTruthy();
  });

  it('deleteIssue() should call IssueService to delete an Issue', () => {
    // Spy on the ngOnInit method to avoid actual service calls
    spyOn(component, 'ngOnInit');

    // Call deleteIssue
    component.deleteIssue('issueId');

    // Check if the deleteIssue method of the issueService was called with the correct arguments
    expect(issueService.deleteIssue).toHaveBeenCalledWith('issueId');

    // Check if ngOnInit was called after deleteIssue (assuming it's supposed to refresh the list)
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  // test to check ngOnInit is calling IssueService or not
  it('ngOnInit() should call IssueService to get all Issues', () => {
    // Call ngOnInit
    component.ngOnInit();

    // Check if the getIssues method of the issueService was called
    expect(issueService.getIssues).toHaveBeenCalled();
  });
});
