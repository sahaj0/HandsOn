import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  post: Post = { userId:2, id:2, title: 'Mock Data', body: 'Lorem body' };
  errorMessage!: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
        this.post = data;
        console.log(data.userId);
      },
      error => {
        console.error('Error in component:', error);
       
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    );
  }
  

}
