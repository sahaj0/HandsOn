import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DataDisplayComponent } from './data-display.component';
import { DataService } from 'src/app/services/data.service';
import { delay, of, throwError } from 'rxjs';

describe('DataDisplayComponent', () => {
  let component: DataDisplayComponent;
  let fixture: ComponentFixture<DataDisplayComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['getData']);

    TestBed.configureTestingModule({
      declarations: [DataDisplayComponent],
      providers: [{ provide: DataService, useValue: dataServiceSpy }],
    });

    fixture = TestBed.createComponent(DataDisplayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data from the service', fakeAsync(() => {
    const testData = { userId: 1, id: 1, title: 'Test Data', body: 'Test Body' };
    dataServiceSpy.getData.and.returnValue(of(testData));
  
    fixture.detectChanges();  
  
    tick();  
  
    fixture.detectChanges();  
  
   
  }));
  

  it('should handle error from the service gracefully', fakeAsync(() => {
    const errorMessage = 'Service error !!!';
    dataServiceSpy.getData.and.returnValue(throwError(errorMessage));

    fixture.detectChanges();

    tick();

  }));

  

  it('should update data after a delay', fakeAsync(() => {
    const testData = { userId: 1, id: 1, title: 'Test Data', body: 'Test Body' };
    dataServiceSpy.getData.and.returnValue(of(testData).pipe(delay(1000))); 
  
    fixture.detectChanges();  
  
    tick(500); 
  
    
  
    tick(500); 
  
    fixture.detectChanges();  
  
   
  }));
  

  it('should handle asynchronous data retrieval', fakeAsync(() => {
    const testData = { userId: 1, id: 1, title: 'Test Data', body: 'Test Body' };
    dataServiceSpy.getData.and.returnValue(of(testData).pipe(delay(1000))); 
  
    fixture.detectChanges();  
  
   
  
    tick(1000);  
  
    fixture.detectChanges(); 
  
    
  }));
  
});
