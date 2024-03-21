import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Issue } from 'src/app/models/Issue';
import { Observable } from 'rxjs';
import { IssueService } from './issue.service';

const issues: Issue[] = [
  {
    title: 'Issue in pom.xml',
    description: 'Avoid redundancy of dependencies'
  },
  {
    title: 'Implementaion in testing',
    description: 'Test all the scenarios'
  }
];
describe('IssueService', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  let httpMock: HttpTestingController;
  let service: IssueService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssueService],
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(IssueService);
  });

  // test to check if service exist
 it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addIssue() should add issue', (done) => {
    const issue = { title: 'Test Issue', description: 'Description' };
  
    // Subscribe to the observable and call done when complete
    service.addIssue(issue).subscribe(() => {
      const req = httpMock.expectOne('http://localhost:3000/issues');
      expect(req.request.method).toEqual('POST');
      req.flush({});
  
      done(); // Call done to signal completion
    });
  });
  

  // testing service for getIssues method
  it('getIssues() method should get all issues', (done) => {
    // We call the service
    service.getIssues().subscribe((data) => {
      // Then we set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/issues');

      // Expect the request to be a GET request
      expect(req.request.method).toEqual('GET');

      // Then we set the fake data to be returned by the mock
      req.flush(issues);
      done();
    });
  });

  // testing service for deleteIssue method
  it('deleteIssue() method should delete issue',(done) => {
    
    const issueId = '1';

    // We call the service
   service.deleteIssue(issueId).subscribe((data) => {
      // Then we set the expectations for the HttpClient mock
      const req = httpMock.expectOne(`http://localhost:3000/issues/${issueId}/`);

      // Expect the request to be a DELETE request
      expect(req.request.method).toEqual('DELETE');

      // Then we set the fake data to be returned by the mock
      req.flush({});
      done();
    });
  });

  afterEach(() => {
    // Verify that there are no outstanding requests
    httpMock.verify();
  });
});