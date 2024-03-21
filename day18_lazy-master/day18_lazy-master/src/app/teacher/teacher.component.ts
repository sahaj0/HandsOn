import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
   // inject the service into the constructor
   constructor(private apiService: ApiService) {}
 
   ngOnInit(): void {
     // call the get method on the service with 'teachers' as input and subscribe to the observable it returns to get the data
     this.apiService.get('teachers').subscribe((data)=>{
       return data;
       console.log(data);
     })
   }
}
