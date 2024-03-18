import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit(): void {
  
    // Log Messages
    this.logService.log('Sample component initialized.');
    this.logService.error('An error occurred in the sample component.');

    //Write code here to extend the component to support different log levels (warn and info)
    this.logService.warn('This is a warning message.');
    this.logService.info('This is an info message.');
    
  }
}