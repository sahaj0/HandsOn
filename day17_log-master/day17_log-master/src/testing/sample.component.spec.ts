import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponent } from 'src/app/sample/sample.component';
import { LogService } from 'src/app/log.service';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;
  let logServiceSpy: jasmine.SpyObj<LogService>;

  beforeEach(() => {
    logServiceSpy = jasmine.createSpyObj('LogService', ['log', 'error','warn','info']);

    TestBed.configureTestingModule({
      declarations: [SampleComponent],
      providers: [{ provide: LogService, useValue: logServiceSpy }]
    });

    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log messages on initialization', () => {
    component.ngOnInit();
    expect(logServiceSpy.log).toHaveBeenCalledWith('Sample component initialized.');
    expect(logServiceSpy.error).toHaveBeenCalledWith('An error occurred in the sample component.');
    expect(logServiceSpy.warn).toHaveBeenCalledWith('This is a warning message.');
    expect(logServiceSpy.info).toHaveBeenCalledWith('This is an info message.');
    

  });

  // Add more test cases for other component functionalities
});
