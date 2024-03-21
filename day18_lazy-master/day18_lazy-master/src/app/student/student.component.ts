// student/student.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(private apiService: ApiService) {}
 
  ngOnInit(): void {
  // call the get method on the service with 'students' as input and subscribe to the observable it returns to get the data
  this.apiService.get('student').subscribe((data)=>{
    return data;
    console.log(data);
  })
  }
}
