import { TestBed } from '@angular/core/testing';

import { LogService } from 'src/app/log.service';

describe('LogService', () => {
  let service: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log messages with the correct format', () => {
    spyOn(console, 'log');
    service.log('Test message');
    expect(console.log).toHaveBeenCalledWith('[LOG]: Test message');
  });

  it('should log errors with the correct format', () => {
    spyOn(console, 'error');
    service.error('Test error');
    expect(console.error).toHaveBeenCalledWith('[ERROR]: Test error');
  });
  
});
